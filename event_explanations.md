# Event Analysis Explanations (Instructor Reference)

## Malicious Events (10 total)

### Event 1 - Network Connection to Suspicious IP
**Classification: Malicious**
- Sarah Martinez connecting to 185.220.101.42:8080
- Port 8080 not in approved ports list (check company docs)
- Students should research IP on threat intel sites - likely C2 infrastructure
- CTO accessing suspicious external resources is concerning

### Event 2 - Malicious File Download  
**Classification: Malicious**
- Hash 44d88612fea8a8f36de82e1278abb02f is EICAR test file variant (VirusTotal will flag)
- Hash 275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f is known Zeus banking trojan
- Domain update-manager.com should be researched (likely suspicious)
- .exe file from untrusted source

### Event 3 - Unauthorized Database Access
**Classification: Malicious**
- Richard Hughes is Security Guard (check employee matrix)
- Security guards have NO database access per company policy
- Accessing salary data at 2:15 AM (outside business hours)
- Clear policy violation - insider threat

### Event 4 - Unauthorized USB Device
**Classification: Malicious**
- Rebecca Carter is an Intern (check employee matrix)
- Interns have NO USB device authorization per policy
- Unknown device ID (0x1234:0x5678) not in approved list
- Potential data exfiltration risk

### Event 5 - Cryptocurrency Mining
**Classification: Malicious**  
- David Wilson connecting to bitcoinminer.best
- Research domain - clearly cryptocurrency related
- P2P/crypto mining explicitly prohibited per company policy
- Using company resources for personal gain

### Event 6 - Malicious Email Attachment
**Classification: Malicious**
- Double extension .pdf.exe is classic malware technique
- Hash 5d41402abc4b2a76b9719d911017c592 should be checked on VirusTotal
- Sender domain totally-legitimate-company.org is suspicious
- Social engineering with urgent payment request

### Event 7 - DNS Tunneling/C2 Communication  
**Classification: Malicious**
- 47 repeated DNS queries to cmd-and-control.tk
- .tk domains often used by attackers (free registration)
- Research domain - likely malicious infrastructure
- Pattern suggests DNS tunneling or C2 beaconing

### Event 8 - After-Hours Physical Access Violation
**Classification: Malicious**
- Mark Stevens accessing SERVER_ROOM_A at 23:45 (11:45 PM)
- Check employee matrix - he's Night Security (6PM-6AM shift)
- BUT server room access should be restricted even for security
- No documented approval for server room access

### Event 9 - Prohibited Software Installation
**Classification: Malicious**
- uTorrent is P2P BitTorrent client
- P2P file sharing explicitly prohibited per company policy
- Jennifer White (Marketing) has no authorization for such software
- Could be used for piracy or data exfiltration

### Event 10 - Trojan Execution
**Classification: Malicious**
- svchost32.exe in user temp folder (legitimate svchost.exe is in System32)
- Hash e6f9f6e6fde9e8f8d8d8c8c8b8b8a8a8 should be researched (likely malicious)
- Process name mimics legitimate Windows service (masquerading)
- Network connections initiated after execution

## False Positive Events (10 total)

### Event 1 - Windows Update
**Classification: False Positive**
- Legitimate Microsoft update server (download.windowsupdate.com)
- svchost.exe is legitimate Windows process for updates
- Amanda Taylor is legitimate employee during business hours
- Normal system maintenance activity

### Event 2 - Scheduled Database Backup
**Classification: False Positive**
- svc.backup is authorized service account (check employee matrix)
- 2:00 AM is standard backup window for databases
- Automated process, not human-initiated
- Essential business operation

### Event 3 - Approved USB Device by IT Admin
**Classification: False Positive**
- Tom Rogers is IT Administrator (check employee matrix)
- IronKey device ID (0x13FE:0x4200) is in approved USB device list
- IT staff authorized for USB devices per policy
- Legitimate administrative tools

### Event 4 - Corporate Partner Email
**Classification: False Positive**
- PDF from techpartner.com (legitimate business partner)
- Clean hash, standard business document
- Peter Johnson is legitimate employee
- Normal business communication

### Event 5 - Corporate SharePoint Access
**Classification: False Positive**
- acmecorp.sharepoint.com is company's own SharePoint
- Michael Brown accessing marketing documents (he's in Marketing)
- Legitimate business cloud storage
- Normal work activity

### Event 6 - Authorized VPN Connection
**Classification: False Positive**
- Emma Davis using corporate VPN (vpn.acmecorp.com)
- HR Manager with authorized remote access
- During business hours from known location
- Standard remote work

### Event 7 - Legitimate Adobe Software Update
**Classification: False Positive**
- Download from official Adobe servers (download.adobe.com)
- Alex Garcia is Lead Designer (needs Adobe tools)
- Adobe Creative Cloud is in approved applications list
- Legitimate software maintenance

### Event 8 - Normal Badge Access
**Classification: False Positive**
- James Wilson entering main office at 8:15 AM (business hours)
- CEO with 24/7 physical access authorization
- Normal business entry
- During business hours

### Event 9 - Internal DNS Query
**Classification: False Positive**
- DNS query for corporate mail server (mail.acmecorp.local)
- Daniel Martinez is Finance employee
- Internal infrastructure access
- Normal email client operation

### Event 10 - Approved Software Installation by IT
**Classification: False Positive**
- Visual Studio Code is in approved applications list
- Tom Rogers is IT Administrator (authorized to install software)
- Installation from official Microsoft repository
- Legitimate development tool installation

## Suspicious Events (5 total)

### Event 1 - Off-Hours Remote Access
**Classification: Suspicious**
- Anna Clark (HR Specialist) logging in at 3:22 AM
- Outside normal business hours
- Could be legitimate remote work or compromised account
- Requires investigation of work justification

### Event 2 - Multiple Failed Login Attempts
**Classification: Suspicious**
- Chris Thompson with 8 failed logins in 5 minutes
- Could be forgotten password or brute force attack
- Account got locked (security measure worked)
- Need to verify with user if legitimate

### Event 3 - Large Data Transfer
**Classification: Suspicious**
- Sophia Lee accessed 2,847 files (15.7GB) from Finance share
- She's Sales Rep accessing Finance data
- Could be legitimate cross-department work or data theft
- Investigate business justification and data sensitivity

### Event 4 - Encoded PowerShell Execution
**Classification: Suspicious**
- William Garcia running PowerShell with encoded commands
- Base64 encoding often used to hide malicious commands
- Could be legitimate automation or malware
- Need to decode and analyze the actual command

### Event 5 - Internal Network Scanning
**Classification: Suspicious**
- Mike Chen performing network scan of internal systems
- He's DevOps Engineer (could be legitimate security testing)
- Could also be reconnaissance for lateral movement
- Verify if authorized security assessment