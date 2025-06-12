# Event Analysis Explanations (Instructor Reference)

## Malicious Events (10 total)

### Event 1 - C2 Communication (Network Connection)
**Classification: Malicious**
- Sarah Martinez (CTO) connecting to 185.220.101.42:8080
- Port 8080 not in approved ports list (check company docs - only 80, 443, 22, 3389, 1433 approved)
- Students should research IP 185.220.101.42 on threat intel sites - likely C2 infrastructure
- Executive accessing suspicious external resources is high-risk insider threat
- Chrome process making connection could indicate browser compromise

### Event 2 - Malware Download (File Download)
**Classification: Malicious**
- John Thompson (CFO) downloading system_update.exe from update-manager.com
- Hash 44d88612fea8a8f36de82e1278abb02f is EICAR test file variant (VirusTotal will flag)
- Domain update-manager.com should be researched (not official Microsoft)
- .exe file from untrusted source violates security policy
- Executive-level compromise attempt - high priority

### Event 3 - Unauthorized Database Access (Database Access)
**Classification: Malicious**
- Richard Hughes is Security Guard (check employee matrix)
- Security guards have NO database access per company policy
- Accessing employee salary data at 2:15 AM (outside business hours)
- Clear policy violation - potential insider threat or compromised account
- Query targeting financial data is suspicious

### Event 4 - Unauthorized USB Device (USB Device)
**Classification: Malicious**
- Rebecca Carter is an Intern (check employee matrix)
- Interns have NO USB device authorization per company policy
- Unknown device ID (0x1234:0x5678) not in approved USB device list
- Generic USB Flash Drive indicates personal/unauthorized device
- Potential data exfiltration risk from intern-level access

### Event 5 - Cryptocurrency Mining (Web Request)
**Classification: Malicious**
- David Wilson connecting to bitcoinminer.best
- Domain clearly cryptocurrency-related (research will confirm mining pool)
- P2P/crypto mining explicitly prohibited per company policy
- IT staff member using company resources for personal mining
- POST request indicates active participation, not just browsing

### Event 6 - Malicious Email Attachment (Email Attachment)
**Classification: Malicious**
- Double extension .pdf.exe is classic malware technique
- Hash 5d41402abc4b2a76b9719d911017c592 should be checked on VirusTotal
- Sender domain totally-legitimate-company.org is suspicious (research domain)
- Social engineering with urgent payment request subject line
- Lisa Anderson (Sales Manager) targeted - common attack vector

### Event 7 - DNS Tunneling/C2 Communication (DNS Query)
**Classification: Malicious**
- Multiple DNS queries to cmd-and-control.tk
- .tk domains often used by attackers (free registration, hard to trace)
- Domain name clearly indicates command and control infrastructure
- Research domain on threat intel sites - likely malicious
- Mike Chen (DevOps) could indicate lateral movement or insider threat

### Event 8 - After-Hours Physical Access Violation (Physical Access)
**Classification: Malicious**
- Mark Stevens accessing SERVER_ROOM_A at 23:45 (11:45 PM)
- Check employee matrix - he's Night Security (works 6PM-6AM shift)
- However, server room access should be restricted even for security staff
- No IT personnel present to authorize server room access
- Physical security policy violation requiring investigation

### Event 9 - Prohibited Software Installation (Software Installation)
**Classification: Malicious**
- uTorrent is P2P BitTorrent client
- P2P file sharing explicitly prohibited per company policy
- Jennifer White (Marketing) has no authorization for such software
- Could be used for piracy, data exfiltration, or malware distribution
- Installation indicates policy awareness bypass

### Event 10 - Trojan Execution (Process Execution)
**Classification: Malicious**
- svchost32.exe in user temp folder (legitimate svchost.exe is in System32)
- Hash e6f9f6e6fde9e8f8d8d8c8c8b8b8a8a8 should be researched (likely malicious)
- Process name mimics legitimate Windows service (masquerading technique)
- Robert Kim (Sales) workstation potentially compromised
- Temp folder execution is common malware behavior

## False Positive Events (10 total)

### Event 11 - Windows Update (Network Connection)
**Classification: False Positive**
- Legitimate Microsoft update server (download.windowsupdate.com)
- svchost.exe is legitimate Windows process for updates
- Amanda Taylor is legitimate employee during business hours
- HTTPS protocol and Microsoft-signed process indicate normal system maintenance
- Standard Windows Update behavior

### Event 12 - Scheduled Database Backup (Database Access)
**Classification: False Positive**
- svc.backup is authorized service account (check employee matrix)
- 2:00 AM is standard backup window for databases (off-peak hours)
- Automated process, not human-initiated
- BACKUP DATABASE command is legitimate maintenance operation
- Essential business operation for data protection

### Event 13 - Approved USB Device by IT Admin (USB Device)
**Classification: False Positive**
- Tom Rogers is IT Administrator (check employee matrix)
- IronKey device ID (0x13FE:0x4200) is in approved USB device list
- IT staff authorized for USB devices per company policy
- IronKey is enterprise-grade encrypted USB device
- Legitimate administrative tools and secure storage

### Event 14 - Corporate Partner Email (Email Attachment)
**Classification: False Positive**
- PDF from techpartner.com (research shows legitimate business partner)
- Clean hash, standard business document format
- Peter Johnson is legitimate sales employee
- Q2 Partnership Agreement indicates normal business communication
- Legal department sender adds credibility

### Event 15 - Corporate SharePoint Access (Web Request)
**Classification: False Positive**
- acmecorp.sharepoint.com is company's own SharePoint instance
- Michael Brown accessing marketing documents (he's in Marketing department)
- Legitimate business cloud storage platform
- GET request to /sites/marketing/documents shows appropriate access
- Normal work activity during business hours

### Event 16 - Authorized VPN Connection (VPN Connection)
**Classification: False Positive**
- Emma Davis using corporate VPN (vpn.acmecorp.com)
- HR Manager with authorized remote access privileges
- Austin, TX location is legitimate (company has office there)
- OpenVPN is approved corporate VPN solution
- Standard remote work during business hours

### Event 17 - Legitimate Adobe Software Update (File Download)
**Classification: False Positive**
- Download from official Adobe servers (download.adobe.com)
- Alex Garcia is Lead Designer (check employee matrix - needs Adobe tools)
- Adobe Creative Cloud is in approved applications list
- Large file size normal for Adobe installers
- Hash verification would confirm legitimacy

### Event 18 - Normal Badge Access (Physical Access)
**Classification: False Positive**
- James Wilson (CEO) entering main office at 8:15 AM
- Business hours entry (company operates 8 AM - 6 PM)
- CEO has 24/7 physical access authorization
- MAIN_ENTRANCE is normal entry point
- 3-second door duration indicates normal entry

### Event 19 - Internal DNS Query (DNS Query)
**Classification: False Positive**
- DNS query for corporate mail server (mail.acmecorp.local)
- Daniel Martinez is Finance employee (legitimate user)
- Internal domain (.acmecorp.local) indicates company infrastructure
- A record query normal for email client operation
- Response IP 192.168.1.250 is internal mail server

### Event 20 - Approved Software Installation by IT (Software Installation)
**Classification: False Positive**
- Visual Studio Code is in approved applications list
- Tom Rogers is IT Administrator (authorized to install software)
- Installation from C:\\AdminTools\\ indicates IT-managed deployment
- Official Microsoft repository source confirms legitimacy
- Development tool appropriate for DevOps team support

## Suspicious Events (5 total)

### Event 21 - Off-Hours Remote Access (User Authentication)
**Classification: Suspicious**
- Anna Clark (HR Specialist) logging in at 3:22 AM
- Outside normal business hours (company operates 8 AM - 6 PM)
- Could be legitimate remote work or compromised account
- HR staff may have legitimate after-hours work (payroll, urgent issues)
- Requires investigation: verify with user if login was intentional

### Event 22 - Multiple Failed Login Attempts (Authentication Failure)
**Classification: Suspicious**
- Chris Thompson with 8 failed logins in 5 minutes
- Could be forgotten password or brute force attack attempt
- Account lockout mechanism worked (security control effective)
- Sales employee may have legitimate password issues
- Verify with user: if not legitimate, investigate source IP and timing

### Event 23 - Large Data Transfer (File Access)
**Classification: Suspicious**
- Sophia Lee (Sales Rep) accessed 2,847 files (15.7GB) from Finance share
- Cross-department data access (Sales accessing Finance data)
- Large volume suggests bulk download rather than normal file access
- Could be legitimate cross-department project or data theft attempt
- Investigate: business justification, file types, and data sensitivity

### Event 24 - Encoded PowerShell Execution (Process Execution)
**Classification: Suspicious**
- William Garcia (Finance) running PowerShell with encoded commands
- Base64 encoding often used to hide malicious commands from detection
- Could be legitimate automation script or malware execution
- -ExecutionPolicy Bypass indicates attempt to circumvent security
- Decode the command: JABzAD0ATgBlAHcALQBPAGIAagBlAGMAdAAgAEkATwAuAE0A (investigate content)

### Event 25 - Internal Network Scanning (Network Scan)
**Classification: Suspicious**
- Mike Chen (DevOps Engineer) performing TCP SYN scan of internal network
- Scanned common ports: 22,80,135,139,443,445,3389
- Could be legitimate security assessment or reconnaissance for attack
- DevOps role may require network discovery for infrastructure management
- Verify authorization: check if security team approved network scanning

## Investigation Guidelines for Students

### Key Questions to Ask:
1. **Who is the user?** Check employee matrix for role, department, and permissions
2. **When did it happen?** Consider business hours, shift schedules, and timing context
3. **What is the technical indicator?** Research IPs, domains, hashes, and file names
4. **Does it violate policy?** Cross-reference with company security policies
5. **What is the business context?** Consider legitimate business needs and workflows

### External Tools Students Should Use:
- **VirusTotal**: Check file hashes and domains
- **AbuseIPDB**: Research IP reputation
- **URLVoid**: Domain reputation checking
- **Shodan**: IP intelligence and infrastructure research
- **AlienVault OTX**: Threat intelligence correlation

### Common Student Mistakes:
- **Assuming severity = maliciousness**: High severity events can be false positives
- **Ignoring employee context**: Not checking user roles and permissions
- **Skipping external research**: Not validating suspicious indicators
- **Missing policy violations**: Not consulting company documentation
- **Overlooking timing**: Ignoring business hours and shift schedules