// Event templates for SIEM training - Each event is unique
const eventTemplates = {
    malicious: [
        {
            eventType: 'Network Connection',
            description: 'Outbound TCP connection to suspicious IP address',
            sourceIP: '192.168.1.157',
            destinationIP: '185.220.101.42',
            destination: '185.220.101.42:8080',
            severity: 'medium',
            details: {
                hostname: 'WS-MARKETING-07',
                username: 'ACMECORP\\sarah.martinez',
                protocol: 'TCP',
                bytes_sent: '1247',
                bytes_received: '8934',
                duration: '00:04:23',
                source_port: '49152',
                destination_port: '8080',
                process_name: 'chrome.exe',
                threat_intel: 'IP associated with known malware C2 infrastructure'
            }
        },
        {
            eventType: 'File Download',
            description: 'Executable file downloaded from untrusted domain',
            sourceIP: '192.168.1.89',
            destinationIP: '94.232.47.156',
            destination: 'update-manager.com',
            severity: 'high',
            details: {
                hostname: 'WS-FINANCE-12',
                username: 'ACMECORP\\john.thompson',
                filename: 'system_update.exe',
                file_size: '2847264',
                hash_md5: 'd41d8cd98f00b204e9800998ecf8427e',
                hash_sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
                download_url: 'hxxp://update-manager[.]com/downloads/system_update.exe',
                source_port: '443',
                destination_port: '80',
                user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                domain_reputation: 'Recently registered domain (3 days old)'
            }
        },
        {
            eventType: 'Database Access',
            description: 'Unauthorized database query by security guard',
            sourceIP: '192.168.1.188',
            destinationIP: '192.168.1.200',
            destination: 'DB-PROD-01.acmecorp.local',
            severity: 'high',
            details: {
                hostname: 'WS-SECURITY-01',
                username: 'ACMECORP\\richard.hughes',
                database: 'employee_records',
                query: 'SELECT * FROM employees WHERE salary > 100000 AND department = "Finance"',
                access_time: '02:15:32',
                source_port: '1433',
                destination_port: '1433',
                table_accessed: 'employees',
                records_returned: '47',
                policy_violation: 'Security guards have no database access authorization'
            }
        },
        {
            eventType: 'USB Device',
            description: 'Unauthorized USB device connected by intern',
            sourceIP: '192.168.1.67',
            destinationIP: '192.168.1.67',
            destination: 'localhost',
            severity: 'medium',
            details: {
                hostname: 'WS-HR-02',
                username: 'ACMECORP\\rebecca.carter',
                device_type: 'USB_Mass_Storage',
                vendor_id: '0x1234',
                product_id: '0x5678',
                serial_number: 'UNKNOWN001122334455',
                device_name: 'Generic USB Flash Drive',
                source_port: 'USB3',
                destination_port: 'USB3',
                files_accessed: '247',
                policy_violation: 'Interns not authorized for USB device usage',
                device_encryption: 'None detected'
            }
        },
        {
            eventType: 'Web Request',
            description: 'Cryptocurrency mining pool connection attempt',
            sourceIP: '192.168.1.178',
            destinationIP: '198.12.75.112',
            destination: 'bitcoinminer.best',
            severity: 'medium',
            details: {
                hostname: 'WS-IT-05',
                username: 'ACMECORP\\david.wilson',
                url: 'hxxps://bitcoinminer[.]best/api/v2/pool/connect',
                method: 'POST',
                status_code: '200',
                user_agent: 'Stratum/1.6.0',
                source_port: '49876',
                destination_port: '443',
                payload_data: 'mining.subscribe worker credentials',
                policy_violation: 'Cryptocurrency mining explicitly prohibited'
            }
        },
        {
            eventType: 'Email Attachment',
            description: 'Suspicious double-extension file in email',
            sourceIP: '192.168.1.67',
            destinationIP: '192.168.1.250',
            destination: 'mail.acmecorp.local',
            severity: 'high',
            details: {
                hostname: 'WS-HR-02',
                username: 'ACMECORP\\lisa.anderson',
                filename: 'invoice_march_2024.pdf.exe',
                file_size: '1847392',
                hash_md5: 'a665a45920422f9d417e4867efdc4fb8',
                hash_sha256: '275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f',
                sender: 'billing@totally-legitimate-company.org',
                source_port: '25',
                destination_port: '25',
                email_subject: 'URGENT: Outstanding Invoice Payment Required',
                virus_total_detection: '15/67 engines flagged as malicious'
            }
        },
        {
            eventType: 'DNS Query',
            description: 'Multiple DNS queries to suspected C2 domain',
            sourceIP: '192.168.1.203',
            destinationIP: '45.61.136.207',
            destination: 'cmd-and-control.tk',
            severity: 'high',
            details: {
                hostname: 'WS-DEVOPS-03',
                username: 'ACMECORP\\mike.chen',
                query_type: 'A',
                response_ip: '45.61.136.207',
                query_count: '47',
                domain: 'cmd-and-control.tk',
                source_port: '53',
                destination_port: '53',
                domain_age: '3 days',
                threat_intel: 'Known C2 infrastructure from threat feeds',
                dns_tunneling_indicators: 'Unusual query patterns detected'
            }
        },
        {
            eventType: 'Administrative Access',
            description: 'External administrator login from foreign country',
            sourceIP: '203.0.113.89',
            destinationIP: '192.168.1.10',
            destination: 'DC-PROD-01.acmecorp.local',
            severity: 'critical',
            details: {
                username: 'ACMECORP\\administrator',
                login_source: 'External IP address',
                access_time: '03:22:45',
                authentication_method: 'NTLM',
                source_country: 'Romania',
                source_port: '3389',
                destination_port: '3389',
                session_duration: '00:08:15',
                geolocation: 'Bucharest, Romania',
                previous_login: 'New York office (6 hours ago)',
                impossible_travel: 'Yes - travel time violation'
            }
        },
        {
            eventType: 'Data Exfiltration',
            description: 'Large file transfer to personal cloud storage',
            sourceIP: '192.168.1.145',
            destinationIP: '157.240.12.35',
            destination: 'personal-dropbox.com',
            severity: 'critical',
            details: {
                hostname: 'WS-FINANCE-09',
                username: 'ACMECORP\\jennifer.brown',
                bytes_transferred: '567891234',
                transfer_duration: '00:45:12',
                files_uploaded: '127',
                encryption: 'none',
                source_port: '443',
                destination_port: '443',
                file_types: 'xlsx,pdf,docx (financial records)',
                policy_violation: 'Personal cloud storage strictly prohibited'
            }
        },
        {
            eventType: 'Process Execution',
            description: 'Suspicious PowerShell execution with encoded command',
            sourceIP: '192.168.1.112',
            destinationIP: '192.168.1.112',
            destination: 'localhost',
            severity: 'high',
            details: {
                hostname: 'WS-SALES-08',
                username: 'ACMECORP\\jennifer.davis',
                process_name: 'powershell.exe',
                command_line: 'powershell.exe -WindowStyle Hidden -EncodedCommand SQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0AC4ALgAuAA==',
                parent_process: 'winword.exe',
                file_hash: '44d88612fea8a8f36de82e1278abb02f',
                source_port: 'local',
                destination_port: 'local',
                decoded_command: 'Invoke-WebRequest to external malicious URL',
                execution_policy: 'Bypass'
            }
        },
        {
            eventType: 'Network Scanner',
            description: 'External port scanning targeting internal network',
            sourceIP: '203.0.113.45',
            destinationIP: '192.168.1.0',
            destination: '192.168.1.0/24',
            severity: 'high',
            details: {
                external_ip: '203.0.113.45',
                target_network: '192.168.1.0/24',
                ports_scanned: '22,23,80,135,139,443,445,3389,5900',
                scan_type: 'TCP_SYN_Scan',
                packets_sent: '1847',
                source_country: 'Russia',
                source_port: 'random_high_ports',
                destination_port: 'multiple_targets',
                scan_duration: '00:15:43',
                open_ports_found: '80,443,3389'
            }
        },
        {
            eventType: 'Privilege Escalation',
            description: 'Unauthorized privilege escalation attempt detected',
            sourceIP: '192.168.1.143',
            destinationIP: '192.168.1.10',
            destination: 'DC-PROD-01.acmecorp.local',
            severity: 'critical',
            details: {
                hostname: 'WS-GUEST-KIOSK',
                username: 'ACMECORP\\joshua.phillips',
                target_privilege: 'SeDebugPrivilege',
                method: 'Token_Manipulation_Attack',
                process: 'explorer.exe',
                target_user: 'ACMECORP\\administrator',
                source_port: 'local_process',
                destination_port: 'local_process',
                technique: 'Process token duplication exploit',
                success_status: 'Failed - Access Denied by EDR'
            }
        },
        {
            eventType: 'Malware Detection',
            description: 'Banking Trojan detected in system memory',
            sourceIP: '192.168.1.156',
            destinationIP: '192.168.1.156',
            destination: 'localhost',
            severity: 'critical',
            details: {
                hostname: 'WS-ACCOUNTING-04',
                username: 'ACMECORP\\robert.garcia',
                malware_family: 'Emotet.Banking_Trojan',
                detection_method: 'Behavioral_Analysis_Engine',
                process_name: 'svchost.exe',
                process_id: '2847',
                parent_process: 'winword.exe',
                source_port: 'local_process',
                destination_port: 'local_process',
                infection_vector: 'Malicious email attachment macro',
                quarantine_status: 'Successfully isolated and quarantined'
            }
        },
        {
            eventType: 'Lateral Movement',
            description: 'Suspicious SMB lateral movement detected',
            sourceIP: '192.168.1.99',
            destinationIP: '192.168.1.205',
            destination: 'WS-FINANCE-15.acmecorp.local',
            severity: 'high',
            details: {
                hostname: 'WS-TEMP-CONTRACTOR',
                username: 'ACMECORP\\temp_contractor_001',
                protocol: 'SMB',
                service: 'ADMIN$',
                access_type: 'Administrative_Share',
                source_port: '445',
                destination_port: '445',
                authentication_method: 'NTLM_Pass_the_Hash',
                policy_violation: 'Contractors forbidden from accessing other workstations',
                credential_reuse: 'Detected - same hash used on multiple systems'
            }
        }
    ],
    falsePositive: [
        {
            eventType: 'Software Update',
            description: 'Microsoft Windows security update installation',
            sourceIP: '192.168.1.45',
            destinationIP: '13.107.42.14',
            destination: 'download.microsoft.com',
            severity: 'low',
            details: {
                hostname: 'WS-EXECUTIVE-01',
                username: 'ACMECORP\\james.wilson',
                filename: 'windows-update-kb4023057.msu',
                file_size: '15728640',
                hash_md5: 'b4c1d9c6ef5a2e8f7a3d9b8c5e4f1a2b',
                hash_sha256: '6e340b9cffb37a989ca544e6bb780a2c78901d3fb33738768511a30617afa01d',
                download_url: 'https://download.microsoft.com/updates/kb4023057.msu',
                source_port: '443',
                destination_port: '443',
                digital_signature: 'Valid Microsoft Corporation certificate',
                update_category: 'Critical Security Updates'
            }
        },
        {
            eventType: 'Database Backup',
            description: 'Scheduled automated database backup operation',
            sourceIP: '192.168.1.200',
            destinationIP: '192.168.1.210',
            destination: 'BACKUP-SRV-01.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'DB-PROD-01',
                username: 'ACMECORP\\svc.backup',
                database: 'employee_records',
                backup_size: '2847264000',
                backup_location: '\\\\BACKUP-SRV-01\\db_backups\\daily\\',
                scheduled_task: 'Daily_DB_Backup_02:00_AM',
                source_port: '1433',
                destination_port: '1433',
                backup_type: 'Full_Database_Backup',
                completion_status: 'Successful - No errors'
            }
        },
        {
            eventType: 'VPN Connection',
            description: 'Authorized remote access via corporate VPN',
            sourceIP: '78.47.162.89',
            destinationIP: '198.51.100.10',
            destination: 'vpn.acmecorp.com',
            severity: 'low',
            details: {
                external_ip: '78.47.162.89',
                username: 'ACMECORP\\nicole.baker',
                connection_duration: '08:15:32',
                bytes_transferred: '847291648',
                client_version: 'OpenVPN_2.5.7_official',
                certificate_valid: 'Valid corporate certificate',
                source_port: '1194',
                destination_port: '1194',
                vpn_server: 'Corporate_VPN_Primary_Gateway',
                authentication_method: 'Certificate_and_Username_Password'
            }
        },
        {
            eventType: 'Antivirus Scan',
            description: 'Scheduled full system antivirus scan completed',
            sourceIP: '192.168.1.155',
            destinationIP: '192.168.1.155',
            destination: 'localhost',
            severity: 'low',
            details: {
                hostname: 'WS-RESEARCH-09',
                username: 'ACMECORP\\tyler.jones',
                scan_type: 'Full_System_Scan',
                files_scanned: '287451',
                threats_found: '0',
                scan_duration: '02:34:17',
                engine_version: 'Windows_Defender_1.381.2140.0',
                source_port: 'local_service',
                destination_port: 'local_service',
                last_definition_update: '2024-06-05_06:00:00_UTC'
            }
        },
        {
            eventType: 'System Monitoring',
            description: 'DataDog monitoring agent automatic update',
            sourceIP: '192.168.1.188',
            destinationIP: '104.18.34.243',
            destination: 'monitoring.datadog.com',
            severity: 'low',
            details: {
                hostname: 'WS-ANALYTICS-15',
                username: 'ACMECORP\\michelle.king',
                agent_version: 'datadog_agent_v2.14.7',
                update_size: '8847264',
                signature_valid: 'Valid_Datadog_Inc_Certificate',
                certificate: 'CN=Datadog_Inc_O=Datadog_Inc',
                source_port: '443',
                destination_port: '443',
                service_name: 'Approved_Corporate_Monitoring_Solution',
                auto_update_policy: 'Enabled_and_Authorized'
            }
        },
        {
            eventType: 'Patch Installation',
            description: 'WSUS security patch deployment completed',
            sourceIP: '192.168.1.77',
            destinationIP: '192.168.1.251',
            destination: 'WSUS-SRV-01.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'WS-SUPPORT-13',
                username: 'ACMECORP\\ashley.adams',
                patch_id: 'KB5028166_Security_Update',
                category: 'Critical_Security_Updates',
                install_status: 'Successfully_Installed',
                reboot_required: 'No_Reboot_Needed',
                source_port: '80',
                destination_port: '8530',
                wsus_server: 'Corporate_Patch_Management_System',
                deployment_group: 'IT_Workstations_Production'
            }
        },
        {
            eventType: 'File Synchronization',
            description: 'OneDrive for Business automatic file sync',
            sourceIP: '192.168.1.145',
            destinationIP: '40.126.31.192',
            destination: 'onedrive.live.com',
            severity: 'low',
            details: {
                hostname: 'WS-DESIGN-07',
                username: 'ACMECORP\\rachel.hill',
                sync_folder: 'Corporate_Documents_Folder',
                files_synced: '47',
                bytes_uploaded: '23847264',
                user_account: 'rachel.hill@acmecorp.com',
                source_port: '443',
                destination_port: '443',
                tenant_id: 'acmecorp.onmicrosoft.com',
                sync_type: 'Corporate_OneDrive_Business_Account'
            }
        },
        {
            eventType: 'Print Job',
            description: 'Secure document printing to network printer',
            sourceIP: '192.168.1.92',
            destinationIP: '192.168.1.210',
            destination: 'PRINTER-01.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'WS-FINANCE-03',
                username: 'ACMECORP\\john.thompson',
                document_name: 'Q4_Financial_Report_CONFIDENTIAL.pdf',
                pages: '24',
                printer: 'HP_LaserJet_Pro_Floor2_Secure',
                job_size: '2847264',
                source_port: '9100',
                destination_port: '9100',
                print_queue: 'Finance_Secure_Print_Queue',
                color_mode: 'Monochrome_Duplex'
            }
        },
        {
            eventType: 'Email Send',
            description: 'Business proposal email sent to external client',
            sourceIP: '192.168.1.156',
            destinationIP: '192.168.1.250',
            destination: 'mail.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'WS-SALES-12',
                username: 'ACMECORP\\christopher.lee',
                recipient: 'procurement@partnercorp.com',
                subject: 'Q1_2024_Business_Partnership_Proposal',
                attachment_count: '3',
                message_size: '847264',
                source_port: '25',
                destination_port: '25',
                dkim_signature: 'Valid_ACMECORP_Signature',
                spam_score: '0.1_Clean_Email'
            }
        },
        {
            eventType: 'Certificate Renewal',
            description: 'Let\'s Encrypt SSL certificate auto-renewal',
            sourceIP: '192.168.1.250',
            destinationIP: '172.65.32.183',
            destination: 'acme-v02.api.letsencrypt.org',
            severity: 'low',
            details: {
                hostname: 'MAIL-SRV-01',
                username: 'ACMECORP\\svc.certificates',
                domain: 'mail.acmecorp.com',
                certificate_authority: 'Lets_Encrypt_Authority_X3',
                validity_period: '90_days_standard',
                renewal_status: 'Successfully_Renewed',
                source_port: '443',
                destination_port: '443',
                old_cert_expiry: '2024-06-08_23:59:59',
                new_cert_expiry: '2024-09-06_23:59:59'
            }
        },
        {
            eventType: 'Approved USB Device',
            description: 'Corporate encrypted USB device authorized connection',
            sourceIP: '192.168.1.88',
            destinationIP: '192.168.1.88',
            destination: 'localhost',
            severity: 'low',
            details: {
                hostname: 'WS-EXECUTIVE-02',
                username: 'ACMECORP\\james.wilson',
                device_type: 'USB_Mass_Storage_Encrypted',
                vendor_id: '0x13FE',
                product_id: '0x4200',
                serial_number: 'IK-SEC-CORP-001122334455',
                device_name: 'IronKey_Secure_USB_Corporate',
                source_port: 'USB3_Port',
                destination_port: 'USB3_Port',
                files_accessed: '12',
                device_encryption: 'AES-256_Hardware_Encrypted',
                approval_status: 'Pre-approved_Executive_Device'
            }
        }
    ]
};