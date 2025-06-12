// Event templates for SIEM training - Each event is unique with generic names
const eventTemplates = {
    malicious: [
        {
            eventType: 'Network Connection',
            description: 'Outbound connection established',
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
                raw_logs: '[2024-06-12 14:23:17] TCP connection established: 192.168.1.157:49152 -> 185.220.101.42:8080\n[2024-06-12 14:23:17] Process: chrome.exe (PID: 4892)\n[2024-06-12 14:27:40] Connection terminated by remote host'
            }
        },
        {
            eventType: 'File Download',
            description: 'File downloaded from internet',
            sourceIP: '192.168.1.89',
            destinationIP: '94.232.47.156',
            destination: 'update-manager.com',
            severity: 'high',
            details: {
                hostname: 'WS-FINANCE-12',
                username: 'ACMECORP\\john.thompson',
                filename: 'system_update.exe',
                file_size: '2847264',
                hash_md5: '44d88612fea8a8f36de82e1278abb02f',
                hash_sha256: '275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f',
                download_url: 'http://update-manager.com/downloads/system_update.exe',
                source_port: '443',
                destination_port: '80',
                user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                raw_logs: '[2024-06-12 11:45:23] HTTP GET /downloads/system_update.exe\n[2024-06-12 11:45:23] User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\n[2024-06-12 11:45:24] File saved: C:\\Users\\john.thompson\\Downloads\\system_update.exe'
            }
        },
        {
            eventType: 'Database Access',
            description: 'Database query executed',
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
                raw_logs: '[2024-06-12 02:15:32] Database connection established\n[2024-06-12 02:15:32] Query executed: SELECT * FROM employees WHERE salary > 100000 AND department = "Finance"\n[2024-06-12 02:15:33] 47 records returned'
            }
        },
        {
            eventType: 'USB Device',
            description: 'USB device connected',
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
                raw_logs: '[2024-06-12 09:33:12] USB device connected: VID_1234&PID_5678\n[2024-06-12 09:33:13] Device mounted as drive F:\n[2024-06-12 09:33:15] File access began'
            }
        },
        {
            eventType: 'Web Request',
            description: 'HTTP request to external server',
            sourceIP: '192.168.1.178',
            destinationIP: '198.12.75.112',
            destination: 'bitcoinminer.best',
            severity: 'medium',
            details: {
                hostname: 'WS-IT-05',
                username: 'ACMECORP\\david.wilson',
                url: 'https://bitcoinminer.best/api/v2/pool/connect',
                method: 'POST',
                status_code: '200',
                user_agent: 'Stratum/1.6.0',
                source_port: '49876',
                destination_port: '443',
                payload_data: 'mining.subscribe worker credentials',
                raw_logs: '[2024-06-12 16:45:01] HTTPS POST to bitcoinminer.best/api/v2/pool/connect\n[2024-06-12 16:45:02] Response: 200 OK\n[2024-06-12 16:45:02] Data transfer initiated'
            }
        },
        {
            eventType: 'Email Attachment',
            description: 'Email attachment processed',
            sourceIP: '192.168.1.145',
            destinationIP: '192.168.1.250',
            destination: 'mail.acmecorp.local',
            severity: 'high',
            details: {
                hostname: 'WS-SALES-08',
                username: 'ACMECORP\\lisa.anderson',
                filename: 'invoice_march_2024.pdf.exe',
                file_size: '1847392',
                hash_md5: '5d41402abc4b2a76b9719d911017c592',
                hash_sha256: 'aec070645fe53ee3b3763059376134f058cc337247c978add178b6ccdfb0019f',
                sender: 'billing@totally-legitimate-company.org',
                source_port: '25',
                destination_port: '25',
                email_subject: 'URGENT: Outstanding Invoice Payment Required',
                raw_logs: '[2024-06-12 10:22:15] Email received from billing@totally-legitimate-company.org\n[2024-06-12 10:22:16] Attachment saved: invoice_march_2024.pdf.exe\n[2024-06-12 10:22:18] File executed by user'
            }
        },
        {
            eventType: 'DNS Query',
            description: 'DNS resolution request',
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
                raw_logs: '[2024-06-12 13:15:22] DNS query: cmd-and-control.tk (A record)\n[2024-06-12 13:15:23] Response: 45.61.136.207\n[2024-06-12 13:15:25] DNS query: cmd-and-control.tk (A record)'
            }
        },
        {
            eventType: 'Physical Access',
            description: 'Badge access recorded',
            sourceIP: '192.168.1.99',
            destinationIP: '192.168.1.210',
            destination: 'ACCESS-CONTROL-01',
            severity: 'medium',
            details: {
                badge_id: 'BADGE-7789',
                username: 'ACMECORP\\mark.stevens',
                access_point: 'SERVER_ROOM_A',
                access_time: '23:45:17',
                door_status: 'OPENED',
                duration: '00:17:23',
                location: 'New York HQ - Floor 3',
                raw_logs: '[2024-06-12 23:45:17] Badge scan: BADGE-7789 at SERVER_ROOM_A\n[2024-06-12 23:45:17] Access granted\n[2024-06-12 00:02:40] Door secured'
            }
        },
        {
            eventType: 'Software Installation',
            description: 'Application installed',
            sourceIP: '192.168.1.122',
            destinationIP: '192.168.1.122',
            destination: 'localhost',
            severity: 'medium',
            details: {
                hostname: 'WS-MARKETING-05',
                username: 'ACMECORP\\jennifer.white',
                application: 'uTorrent BitTorrent Client',
                installer_path: 'C:\\Users\\jennifer.white\\Downloads\\uTorrent.exe',
                installation_time: '14:22:15',
                version: '3.5.5.45852',
                hash_md5: 'c4036527b1ec8890dbe1bb65717dc81f',
                raw_logs: '[2024-06-12 14:22:15] Installation initiated: uTorrent BitTorrent Client\n[2024-06-12 14:22:16] User approval prompt displayed\n[2024-06-12 14:22:18] Installation completed'
            }
        },
        {
            eventType: 'Process Execution',
            description: 'Process started',
            sourceIP: '192.168.1.78',
            destinationIP: '192.168.1.78',
            destination: 'localhost',
            severity: 'high',
            details: {
                hostname: 'WS-FINANCE-05',
                username: 'ACMECORP\\robert.kim',
                filename: 'svchost32.exe',
                file_path: 'C:\\Users\\robert.kim\\AppData\\Local\\Temp\\svchost32.exe',
                execution_time: '11:33:47',
                hash_md5: 'e6f9f6e6fde9e8f8d8d8c8c8b8b8a8a8',
                hash_sha256: 'a665a45920422f9d417e4867efdc4fb8',
                parent_process: 'explorer.exe',
                raw_logs: '[2024-06-12 11:33:47] Process execution: svchost32.exe\n[2024-06-12 11:33:48] Parent process: explorer.exe (PID: 1234)\n[2024-06-12 11:33:49] Network connections initiated'
            }
        }
    ],
    falsePositive: [
        {
            eventType: 'Network Connection',
            description: 'Outbound connection established',
            sourceIP: '192.168.1.156',
            destinationIP: '13.107.42.14',
            destination: 'download.windowsupdate.com',
            severity: 'low',
            details: {
                hostname: 'WS-ACCOUNTING-04',
                username: 'ACMECORP\\amanda.taylor',
                protocol: 'HTTPS',
                bytes_sent: '2847',
                bytes_received: '15629384',
                duration: '00:12:45',
                source_port: '443',
                destination_port: '443',
                process_name: 'svchost.exe',
                raw_logs: '[2024-06-12 09:15:30] Windows Update: Downloading KB5034441\n[2024-06-12 09:15:31] HTTPS connection to download.windowsupdate.com\n[2024-06-12 09:28:15] Download completed successfully'
            }
        },
        {
            eventType: 'Database Access',
            description: 'Database query executed',
            sourceIP: '192.168.1.205',
            destinationIP: '192.168.1.200',
            destination: 'DB-PROD-01.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'BACKUP-SRV-01',
                username: 'ACMECORP\\svc.backup',
                database: 'employee_records',
                query: 'BACKUP DATABASE employee_records TO DISK',
                access_time: '02:00:15',
                source_port: '1433',
                destination_port: '1433',
                backup_size: '2847392KB',
                raw_logs: '[2024-06-12 02:00:15] Scheduled backup job initiated\n[2024-06-12 02:00:16] Backing up database: employee_records\n[2024-06-12 02:15:42] Backup completed successfully'
            }
        },
        {
            eventType: 'USB Device',
            description: 'USB device connected',
            sourceIP: '192.168.1.98',
            destinationIP: '192.168.1.98',
            destination: 'localhost',
            severity: 'low',
            details: {
                hostname: 'WS-IT-01',
                username: 'ACMECORP\\tom.rogers',
                device_type: 'USB_Mass_Storage',
                vendor_id: '0x13FE',
                product_id: '0x4200',
                serial_number: 'IK123456789',
                device_name: 'IronKey Secure USB 3.0',
                source_port: 'USB3',
                destination_port: 'USB3',
                files_accessed: '12',
                raw_logs: '[2024-06-12 14:22:10] IronKey device connected\n[2024-06-12 14:22:11] Device authenticated successfully\n[2024-06-12 14:22:12] Administrative tools copied'
            }
        },
        {
            eventType: 'Email Attachment',
            description: 'Email attachment processed',
            sourceIP: '192.168.1.203',
            destinationIP: '192.168.1.250',
            destination: 'mail.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'WS-DEVOPS-03',
                username: 'ACMECORP\\peter.johnson',
                filename: 'contract_2024_Q2.pdf',
                file_size: '847392',
                hash_md5: 'c4ca4238a0b923820dcc509a6f75849b',
                hash_sha256: 'e258d248fda94c63753607f7c4494ee0fcbe92f1a76bfdac795c9d84101eb317',
                sender: 'legal@techpartner.com',
                source_port: '25',
                destination_port: '25',
                email_subject: 'Q2 Partnership Agreement - Final Draft',
                raw_logs: '[2024-06-12 11:30:22] Email from known partner: legal@techpartner.com\n[2024-06-12 11:30:23] PDF attachment scanned - clean\n[2024-06-12 11:30:24] Document opened in Adobe Reader'
            }
        },
        {
            eventType: 'Web Request',
            description: 'HTTP request to external server',
            sourceIP: '192.168.1.87',
            destinationIP: '52.97.145.162',
            destination: 'acmecorp.sharepoint.com',
            severity: 'low',
            details: {
                hostname: 'WS-MARKETING-03',
                username: 'ACMECORP\\michael.brown',
                url: 'https://acmecorp.sharepoint.com/sites/marketing/documents',
                method: 'GET',
                status_code: '200',
                user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                source_port: '443',
                destination_port: '443',
                raw_logs: '[2024-06-12 15:20:15] SharePoint access: marketing documents\n[2024-06-12 15:20:16] Authentication successful\n[2024-06-12 15:20:17] File list retrieved'
            }
        },
        {
            eventType: 'VPN Connection',
            description: 'Remote connection established',
            sourceIP: '203.0.113.45',
            destinationIP: '198.51.100.10',
            destination: 'vpn.acmecorp.com',
            severity: 'low',
            details: {
                external_ip: '203.0.113.45',
                username: 'ACMECORP\\emma.davis',
                protocol: 'OpenVPN',
                vpn_server: 'vpn.acmecorp.com',
                connection_time: '08:30:22',
                duration: '08:15:33',
                bytes_sent: '15847392',
                bytes_received: '8472915',
                location: 'Austin, TX',
                raw_logs: '[2024-06-12 08:30:22] VPN connection request from 203.0.113.45\n[2024-06-12 08:30:23] Certificate authentication successful\n[2024-06-12 08:30:24] Tunnel established'
            }
        },
        {
            eventType: 'File Download',
            description: 'File downloaded from internet',
            sourceIP: '192.168.1.123',
            destinationIP: '151.101.193.140',
            destination: 'download.adobe.com',
            severity: 'low',
            details: {
                hostname: 'WS-DESIGN-02',
                username: 'ACMECORP\\alex.garcia',
                filename: 'AdobeCreativeCloud_Installer.exe',
                file_size: '4629384',
                hash_md5: 'b026324c6904b2a9cb4b88d6d61c81d1',
                hash_sha256: '26ab0db90d72e28ad0ba1e22ee510510d927d5a0c8c5e09eff1b45d6fae0a0f1',
                download_url: 'https://download.adobe.com/pub/adobe/creativesuite/CS6/AdobeCreativeCloud_Installer.exe',
                source_port: '443',
                destination_port: '443',
                raw_logs: '[2024-06-12 13:45:10] Adobe Creative Cloud update available\n[2024-06-12 13:45:11] Downloading from official Adobe servers\n[2024-06-12 13:52:33] Download verified and completed'
            }
        },
        {
            eventType: 'Physical Access',
            description: 'Badge access recorded',
            sourceIP: '192.168.1.99',
            destinationIP: '192.168.1.210',
            destination: 'ACCESS-CONTROL-01',
            severity: 'low',
            details: {
                badge_id: 'BADGE-1234',
                username: 'ACMECORP\\james.wilson',
                access_point: 'MAIN_ENTRANCE',
                access_time: '08:15:42',
                door_status: 'OPENED',
                duration: '00:00:03',
                location: 'New York HQ - Ground Floor',
                raw_logs: '[2024-06-12 08:15:42] Badge scan: BADGE-1234 at MAIN_ENTRANCE\n[2024-06-12 08:15:42] Access granted - business hours\n[2024-06-12 08:15:45] Door secured'
            }
        },
        {
            eventType: 'DNS Query',
            description: 'DNS resolution request',
            sourceIP: '192.168.1.78',
            destinationIP: '192.168.1.15',
            destination: 'mail.acmecorp.local',
            severity: 'low',
            details: {
                hostname: 'WS-FINANCE-05',
                username: 'ACMECORP\\daniel.martinez',
                query_type: 'A',
                response_ip: '192.168.1.250',
                query_count: '3',
                domain: 'mail.acmecorp.local',
                source_port: '53',
                destination_port: '53',
                raw_logs: '[2024-06-12 09:05:15] DNS query: mail.acmecorp.local (A record)\n[2024-06-12 09:05:15] Response: 192.168.1.250\n[2024-06-12 09:05:16] Outlook connection established'
            }
        },
        {
            eventType: 'Software Installation',
            description: 'Application installed',
            sourceIP: '192.168.1.98',
            destinationIP: '192.168.1.98',
            destination: 'localhost',
            severity: 'low',
            details: {
                hostname: 'WS-IT-01',
                username: 'ACMECORP\\tom.rogers',
                application: 'Visual Studio Code',
                installer_path: 'C:\\AdminTools\\VSCodeUserSetup-x64-1.85.1.exe',
                installation_time: '10:15:30',
                version: '1.85.1',
                hash_md5: '8b50d92c9b7d4ad9e1e79e9c7c6b8a5d',
                raw_logs: '[2024-06-12 10:15:30] Administrative installation: Visual Studio Code\n[2024-06-12 10:15:31] Installation source: Official Microsoft repository\n[2024-06-12 10:15:45] Installation completed successfully'
            }
        }
    ],
    suspicious: [
        {
            eventType: 'User Authentication',
            description: 'Remote login recorded',
            sourceIP: '45.32.101.23',
            destinationIP: '192.168.1.210',
            destination: 'DC-01.acmecorp.local',
            severity: 'medium',
            details: {
                username: 'ACMECORP\\anna.clark',
                login_time: '03:22:15',
                login_method: 'Remote Desktop',
                source_location: 'Unknown',
                session_duration: '02:15:33',
                raw_logs: '[2024-06-12 03:22:15] RDP login from 45.32.101.23\n[2024-06-12 03:22:16] Authentication successful\n[2024-06-12 05:37:48] Session terminated'
            }
        },
        {
            eventType: 'Authentication Failure',
            description: 'Login attempt failed',
            sourceIP: '192.168.1.134',
            destinationIP: '192.168.1.210',
            destination: 'DC-01.acmecorp.local',
            severity: 'medium',
            details: {
                username: 'ACMECORP\\chris.thompson',
                failed_attempts: '8',
                time_window: '00:05:23',
                lock_status: 'Account temporarily locked',
                source_workstation: 'WS-SALES-06',
                raw_logs: '[2024-06-12 14:45:12] Login attempt failed for chris.thompson\n[2024-06-12 14:45:45] Login attempt failed for chris.thompson\n[2024-06-12 14:50:35] Account locked due to multiple failures'
            }
        },
        {
            eventType: 'File Access',
            description: 'File system access recorded',
            sourceIP: '192.168.1.145',
            destinationIP: '192.168.1.220',
            destination: 'FILE-SRV-01.acmecorp.local',
            severity: 'medium',
            details: {
                hostname: 'WS-SALES-08',
                username: 'ACMECORP\\sophia.lee',
                files_accessed: '2847',
                data_volume: '15.7GB',
                access_time: '16:22:30',
                file_types: '.xlsx, .pdf, .docx',
                share_path: '\\\\FILE-SRV-01\\Finance\\Reports',
                raw_logs: '[2024-06-12 16:22:30] Bulk file access initiated\n[2024-06-12 16:22:31] Accessing Finance Reports share\n[2024-06-12 16:55:42] 2847 files accessed, 15.7GB transferred'
            }
        },
        {
            eventType: 'Process Execution',
            description: 'Process started',
            sourceIP: '192.168.1.156',
            destinationIP: '192.168.1.156',
            destination: 'localhost',
            severity: 'medium',
            details: {
                hostname: 'WS-ACCOUNTING-04',
                username: 'ACMECORP\\william.garcia',
                process: 'powershell.exe',
                command_line: 'powershell.exe -ExecutionPolicy Bypass -EncodedCommand JABzAD0ATgBlAHcALQBPAGIAagBlAGMAdAAgAEkATwAuAE0A',
                execution_time: '11:45:22',
                parent_process: 'explorer.exe',
                raw_logs: '[2024-06-12 11:45:22] PowerShell execution detected\n[2024-06-12 11:45:23] Encoded command parameter used\n[2024-06-12 11:45:24] Process completed'
            }
        },
        {
            eventType: 'Network Scan',
            description: 'Network activity detected',
            sourceIP: '192.168.1.203',
            destinationIP: '192.168.1.0/24',
            destination: 'Internal Network',
            severity: 'medium',
            details: {
                hostname: 'WS-DEVOPS-03',
                username: 'ACMECORP\\mike.chen',
                scan_type: 'TCP SYN Scan',
                ports_scanned: '22,80,135,139,443,445,3389',
                targets: '254',
                duration: '00:08:15',
                tool_signature: 'Nmap-like behavior',
                raw_logs: '[2024-06-12 15:30:10] Network scanning activity detected\n[2024-06-12 15:30:11] Multiple TCP SYN packets to various hosts\n[2024-06-12 15:38:25] Scan completed'
            }
        }
    ]
};