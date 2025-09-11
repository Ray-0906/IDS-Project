from xgboost import XGBClassifier

loaded_model = XGBClassifier()
loaded_model.load_model("best_xgboost_model.json")

import pandas as pd

# -------------------------
# 1. Feature columns from training
# -------------------------
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

# -------------------------
# 2. Attack labeling function
# -------------------------
def label_attack_type(row):
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
    elif row['service'] in ['ftp', 'telnet'] and row['num_failed_logins'] > 0 and row['protocol_type'] == 'tcp':
        return 'Guess_password'
    elif row['service'] == 'ftp' and row['num_file_creations'] > 0 and row['num_failed_logins'] > 0:
        return 'FTP_write'
    elif row['root_shell'] > 0 or row['num_root'] > 0 or row['num_shells'] > 0 or row['su_attempted'] > 0:
        return 'Rootkit'
    elif (row['src_bytes'] > 1000 or row['dst_bytes'] > 1000) and row['flag'] in ['S0', 'REJ'] and (row['serror_rate'] > 0.5 or row['dst_host_serror_rate'] > 0.5):
        return 'DoS'
    elif (row['count'] > 10 or row['srv_count'] > 10) and row['flag'] in ['S1', 'S3', 'SF'] and row['protocol_type'] in ['tcp', 'icmp']:
        return 'Probe'
    elif (row['num_failed_logins'] > 0 or row['is_guest_login'] == '1') and row['service'] in ['ftp', 'telnet', 'ssh'] and (row['num_access_files'] > 0 or row['num_file_creations'] > 0):
        return 'R2L'
    elif (row['root_shell'] > 0 or row['su_attempted'] > 0) and (row['num_root'] > 0 or row['num_file_creations'] > 0 or row['num_shells'] > 0):
        return 'U2R'
    else:
        return 'Other'

# -------------------------
# 3. Inference function
# -------------------------
def predict_from_dict(input_dict, model):
    """
    Predict Normal/Anomaly and infer attack type from a raw input dict.
    """
    # Convert dict to DataFrame
    instance_df = pd.DataFrame([input_dict])

    # One-hot encode categorical columns
    categorical_cols = ['protocol_type', 'service', 'flag',
                        'land', 'logged_in', 'is_host_login', 'is_guest_login']
    instance_encoded = pd.get_dummies(instance_df, columns=categorical_cols)

    # Align with training feature columns
    instance_aligned = instance_encoded.reindex(columns=feature_columns, fill_value=0)

    # Predict anomaly
    pred = model.predict(instance_aligned)[0]
    prob = model.predict_proba(instance_aligned)[0][1]

    # Infer attack type if anomaly
    attack_type = label_attack_type(pd.Series(input_dict)) if pred == 1 else "Normal"
    result = "Anomaly" if pred == 1 else "Normal"

    return {
        "prediction": result,
        "probability_of_anomaly": float(prob),
        "attack_type": attack_type
    }
