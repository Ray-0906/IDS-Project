from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime


class Log(BaseModel):
    server: str  # store ObjectId as hex string in requests
    attack: str
    severity: str
    timestamp: Optional[datetime] = None


class LogOut(Log):
    id: str


class Server(BaseModel):
    name: str
    ip: str
    status: Optional[str] = "online"
    logs: Optional[List[str]] = Field(default_factory=list)  # ObjectId strings


class ServerOut(Server):
    id: str


# Incoming traffic sample for /check (raw dict acceptable, but keep model for validation if used elsewhere)
class TrafficSample(BaseModel):
    ip: str
    method: str
    url: str
    headers: Dict[str, Any]
    body: Optional[Dict[str, Any]] = None
    protocol: str
    port: int
    timestamp: Optional[datetime] = None


class CheckResponse(BaseModel):
    status: str  # "green" | "red"
    label: Optional[str] = None  # "normal" | "malicious" (legacy)
    reason: Optional[str] = None
    logId: Optional[str] = None
    # New fields from ML integration
    confidence: Optional[float] = None  # probability_of_anomaly * 100
    attack: Optional[str] = None  # attack type derived from model heuristics


class FeatureVector(BaseModel):
    # Numeric/base continuous or binary indicators; all default 0
    duration: float = 0
    src_bytes: float = 0
    dst_bytes: float = 0
    wrong_fragment: float = 0
    urgent: float = 0
    hot: float = 0
    num_failed_logins: float = 0
    num_compromised: float = 0
    root_shell: float = 0
    su_attempted: float = 0
    num_root: float = 0
    num_file_creations: float = 0
    num_shells: float = 0
    num_access_files: float = 0
    num_outbound_cmds: float = 0
    count: float = 0
    srv_count: float = 0
    serror_rate: float = 0
    srv_serror_rate: float = 0
    rerror_rate: float = 0
    srv_rerror_rate: float = 0
    same_srv_rate: float = 0
    diff_srv_rate: float = 0
    srv_diff_host_rate: float = 0
    dst_host_count: float = 0
    dst_host_srv_count: float = 0
    dst_host_same_srv_rate: float = 0
    dst_host_diff_srv_rate: float = 0
    dst_host_same_src_port_rate: float = 0
    dst_host_srv_diff_host_rate: float = 0
    dst_host_serror_rate: float = 0
    dst_host_srv_serror_rate: float = 0
    dst_host_rerror_rate: float = 0
    dst_host_srv_rerror_rate: float = 0
    protocol_type_icmp: int = 0
    protocol_type_tcp: int = 0
    protocol_type_udp: int = 0
    service_IRC: int = 0
    service_X11: int = 0
    service_Z39_50: int = 0
    service_aol: int = 0
    service_auth: int = 0
    service_bgp: int = 0
    service_courier: int = 0
    service_csnet_ns: int = 0
    service_ctf: int = 0
    service_daytime: int = 0
    service_discard: int = 0
    service_domain: int = 0
    service_domain_u: int = 0
    service_echo: int = 0
    service_eco_i: int = 0
    service_ecr_i: int = 0
    service_efs: int = 0
    service_exec: int = 0
    service_finger: int = 0
    service_ftp: int = 0
    service_ftp_data: int = 0
    service_gopher: int = 0
    service_harvest: int = 0
    service_hostnames: int = 0
    service_http: int = 0
    service_http_2784: int = 0
    service_http_443: int = 0
    service_http_8001: int = 0
    service_imap4: int = 0
    service_iso_tsap: int = 0
    service_klogin: int = 0
    service_kshell: int = 0
    service_ldap: int = 0
    service_link: int = 0
    service_login: int = 0
    service_mtp: int = 0
    service_name: int = 0
    service_netbios_dgm: int = 0
    service_netbios_ns: int = 0
    service_netbios_ssn: int = 0
    service_netstat: int = 0
    service_nnsp: int = 0
    service_nntp: int = 0
    service_ntp_u: int = 0
    service_other: int = 0
    service_pm_dump: int = 0
    service_pop_2: int = 0
    service_pop_3: int = 0
    service_printer: int = 0
    service_private: int = 0
    service_red_i: int = 0
    service_remote_job: int = 0
    service_rje: int = 0
    service_shell: int = 0
    service_smtp: int = 0
    service_sql_net: int = 0
    service_ssh: int = 0
    service_sunrpc: int = 0
    service_supdup: int = 0
    service_systat: int = 0
    service_telnet: int = 0
    service_tftp_u: int = 0
    service_tim_i: int = 0
    service_time: int = 0
    service_urh_i: int = 0
    service_urp_i: int = 0
    service_uucp: int = 0
    service_uucp_path: int = 0
    service_vmnet: int = 0
    service_whois: int = 0
    flag_OTH: int = 0
    flag_REJ: int = 0
    flag_RSTO: int = 0
    flag_RSTOS0: int = 0
    flag_RSTR: int = 0
    flag_S0: int = 0
    flag_S1: int = 0
    flag_S2: int = 0
    flag_S3: int = 0
    flag_SF: int = 0
    flag_SH: int = 0
    land_0: int = 0
    land_1: int = 0
    logged_in_0: int = 0
    logged_in_1: int = 0
    is_host_login_0: int = 0
    is_host_login_1: int = 0
    is_guest_login_0: int = 0
    is_guest_login_1: int = 0
