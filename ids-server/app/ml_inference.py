from __future__ import annotations
from typing import Dict, Any
from xgboost import XGBClassifier
import pandas as pd
from pathlib import Path

# Reuse the feature column order from training
feature_columns = [
    "duration", "src_bytes", "dst_bytes", "wrong_fragment", "urgent", "hot",
    "num_failed_logins", "num_compromised", "root_shell", "su_attempted",
    "num_root", "num_file_creations", "num_shells", "num_access_files",
    "num_outbound_cmds", "count", "srv_count", "serror_rate", "srv_serror_rate",
    "rerror_rate", "srv_rerror_rate", "same_srv_rate", "diff_srv_rate",
    "srv_diff_host_rate", "dst_host_count", "dst_host_srv_count",
    "dst_host_same_srv_rate", "dst_host_diff_srv_rate",
    "dst_host_same_src_port_rate", "dst_host_srv_diff_host_rate",
    "dst_host_serror_rate", "dst_host_srv_serror_rate", "dst_host_rerror_rate",
    "dst_host_srv_rerror_rate", "protocol_type_icmp", "protocol_type_tcp",
    "protocol_type_udp", "service_IRC", "service_X11", "service_Z39_50",
    "service_aol", "service_auth", "service_bgp", "service_courier",
    "service_csnet_ns", "service_ctf", "service_daytime", "service_discard",
    "service_domain", "service_domain_u", "service_echo", "service_eco_i",
    "service_ecr_i", "service_efs", "service_exec", "service_finger",
    "service_ftp", "service_ftp_data", "service_gopher", "service_harvest",
    "service_hostnames", "service_http", "service_http_2784", "service_http_443",
    "service_http_8001", "service_imap4", "service_iso_tsap", "service_klogin",
    "service_kshell", "service_ldap", "service_link", "service_login",
    "service_mtp", "service_name", "service_netbios_dgm", "service_netbios_ns",
    "service_netbios_ssn", "service_netstat", "service_nnsp", "service_nntp",
    "service_ntp_u", "service_other", "service_pm_dump", "service_pop_2",
    "service_pop_3", "service_printer", "service_private", "service_red_i",
    "service_remote_job", "service_rje", "service_shell", "service_smtp",
    "service_sql_net", "service_ssh", "service_sunrpc", "service_supdup",
    "service_systat", "service_telnet", "service_tftp_u", "service_tim_i",
    "service_time", "service_urh_i", "service_urp_i", "service_uucp",
    "service_uucp_path", "service_vmnet", "service_whois", "flag_OTH",
    "flag_REJ", "flag_RSTO", "flag_RSTOS0", "flag_RSTR", "flag_S0", "flag_S1",
    "flag_S2", "flag_S3", "flag_SF", "flag_SH", "land_0", "land_1",
    "logged_in_0", "logged_in_1", "is_host_login_0", "is_host_login_1",
    "is_guest_login_0", "is_guest_login_1"
]

# Attack labeling heuristics copied from original training logic

def label_attack_type(row: pd.Series) -> str:
    try:
        if row['protocol_type'] == 'icmp' and row['service'] in ['eco_i', 'ecr_i'] and row['flag'] == 'SF' and row['dst_host_same_srv_rate'] > 0.5:
            return 'Smurf'
        elif row['protocol_type'] == 'tcp' and row['flag'] == 'S0' and (row['serror_rate'] > 0.5 or row['srv_serror_rate'] > 0.5):
            return 'Neptune'
        elif row['protocol_type'] == 'tcp' and row['diff_srv_rate'] > 0.5 and row['flag'] in ['SF', 'S1']:
            return 'Nmap'
        elif row['srv_count'] > 10 and row['dst_host_srv_count'] > 10 and row['protocol_type'] in ['tcp', 'icmp'] and row['flag'] in ['SF', 'S1']:
            return 'Satan'
        elif row['protocol_type'] == 'tcp' and row['service'] == 'private' and row['dst_host_count'] > 200 and row['flag'] == 'REJ':
            return 'Portsweep'
        elif row['protocol_type'] == 'icmp' and row['service'] == 'other' and row['serror_rate'] < 0.1:
            return 'Ping_of_Death'
        elif row['service'] in ['ftp', 'telnet'] and row.get('num_failed_logins', 0) > 0 and row['protocol_type'] == 'tcp':
            return 'Guess_password'
        elif row['service'] == 'ftp' and row.get('num_file_creations', 0) > 0 and row.get('num_failed_logins', 0) > 0:
            return 'FTP_write'
        elif row.get('root_shell', 0) > 0 or row.get('num_root', 0) > 0 or row.get('num_shells', 0) > 0 or row.get('su_attempted', 0) > 0:
            return 'Rootkit'
        elif (row.get('src_bytes', 0) > 1000 or row.get('dst_bytes', 0) > 1000) and row['flag'] in ['S0', 'REJ'] and (row.get('serror_rate', 0) > 0.5 or row.get('dst_host_serror_rate', 0) > 0.5):
            return 'DoS'
        elif (row.get('count', 0) > 10 or row.get('srv_count', 0) > 10) and row['flag'] in ['S1', 'S3', 'SF'] and row['protocol_type'] in ['tcp', 'icmp']:
            return 'Probe'
        elif (row.get('num_failed_logins', 0) > 0 or str(row.get('is_guest_login', '0')) == '1') and row['service'] in ['ftp', 'telnet', 'ssh'] and (row.get('num_access_files', 0) > 0 or row.get('num_file_creations', 0) > 0):
            return 'R2L'
        elif (row.get('root_shell', 0) > 0 or row.get('su_attempted', 0) > 0) and (row.get('num_root', 0) > 0 or row.get('num_file_creations', 0) > 0 or row.get('num_shells', 0) > 0):
            return 'U2R'
        else:
            return 'Other'
    except Exception:
        return 'Other'


def load_xgb_model(path: str | Path) -> XGBClassifier:
    model = XGBClassifier()
    model.load_model(str(path))
    return model


def predict_from_dict(input_dict: Dict[str, Any], model: XGBClassifier) -> Dict[str, Any]:
    # Convert dict to DataFrame
    instance_df = pd.DataFrame([input_dict])
    categorical_cols = ['protocol_type', 'service', 'flag', 'land', 'logged_in', 'is_host_login', 'is_guest_login']

    for col in categorical_cols:
        if col not in instance_df.columns:
            instance_df[col] = 'missing'

    instance_encoded = pd.get_dummies(instance_df, columns=categorical_cols)
    instance_aligned = instance_encoded.reindex(columns=feature_columns, fill_value=0)

    pred = model.predict(instance_aligned)[0]  # 1 anomaly, 0 normal
    proba = model.predict_proba(instance_aligned)[0][1]  # probability of anomaly class

    attack_type = label_attack_type(pd.Series(input_dict)) if pred == 1 else 'Normal'
    result = 'Anomaly' if pred == 1 else 'Normal'
    print(attack_type);
    return {
        'prediction': result,
        'probability_of_anomaly': float(proba),
        'attack_type': attack_type
    }


def predict_from_encoded_feature_dict(raw_dict: Dict[str, Any], model: XGBClassifier) -> Dict[str, Any]:
    """Assumes raw_dict keys are already the one-hot encoded feature space.
    Missing columns filled with 0; extra columns ignored.
    """
    row = {col: raw_dict.get(col, 0) for col in feature_columns}
    df = pd.DataFrame([row])
    pred = model.predict(df)[0]
    proba = model.predict_proba(df)[0][1]
    # Reconstruct minimal series for attack labeling
    proto = 'tcp' if row.get('protocol_type_tcp') else ('udp' if row.get('protocol_type_udp') else ('icmp' if row.get('protocol_type_icmp') else 'other'))
    # Find service one-hot
    service = 'other'
    for k in row.keys():
        if k.startswith('service_') and row[k] == 1:
            service = k.replace('service_', '')
            break
    flag = 'SF'
    for k in ['flag_S0','flag_REJ','flag_SF','flag_S1','flag_S2','flag_S3','flag_RSTO','flag_RSTOS0','flag_RSTR','flag_SH','flag_OTH']:
        if row.get(k) == 1:
            flag = k.replace('flag_','')
            break
    series = pd.Series({
        'protocol_type': proto,
        'service': service,
        'flag': flag,
        'dst_host_same_srv_rate': row.get('dst_host_same_srv_rate',0),
        'serror_rate': row.get('serror_rate',0),
        'srv_serror_rate': row.get('srv_serror_rate',0),
        'diff_srv_rate': row.get('diff_srv_rate',0),
        'srv_count': row.get('srv_count',0),
        'dst_host_srv_count': row.get('dst_host_srv_count',0),
        'dst_host_count': row.get('dst_host_count',0),
        'num_failed_logins': row.get('num_failed_logins',0),
        'num_file_creations': row.get('num_file_creations',0),
        'root_shell': row.get('root_shell',0),
        'num_root': row.get('num_root',0),
        'num_shells': row.get('num_shells',0),
        'su_attempted': row.get('su_attempted',0),
        'src_bytes': row.get('src_bytes',0),
        'dst_bytes': row.get('dst_bytes',0),
        'dst_host_serror_rate': row.get('dst_host_serror_rate',0),
        'count': row.get('count',0),
        'is_guest_login': row.get('is_guest_login_1',0),
        'num_access_files': row.get('num_access_files',0)
    })
    attack_type = label_attack_type(series) if pred == 1 else 'Normal'
    return {
        'prediction': 'Anomaly' if pred == 1 else 'Normal',
        'probability_of_anomaly': float(proba),
        'attack_type': attack_type
    }
