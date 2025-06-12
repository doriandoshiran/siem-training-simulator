// Employee database for ACMECORP
const employees = [
    // Executive Team
    { name: "James Wilson", department: "Executive", role: "CEO", database_access: "Executive Dashboard", admin_rights: "Full", physical_access: "24/7", work_schedule: "Flexible", remote_access: "Authorized" },
    { name: "Sarah Martinez", department: "Executive", role: "CTO", database_access: "Technical Systems", admin_rights: "Technical", physical_access: "24/7", work_schedule: "Flexible", remote_access: "Authorized" },
    
    // IT Department
    { name: "Tom Rogers", department: "IT", role: "IT Administrator", database_access: "All Systems", admin_rights: "Full", physical_access: "24/7", work_schedule: "Mon-Fri 8-6", remote_access: "Authorized" },
    { name: "David Wilson", department: "IT", role: "Network Admin", database_access: "Network Logs", admin_rights: "Network", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Authorized" },
    { name: "Mike Chen", department: "IT", role: "DevOps Engineer", database_access: "Application Logs", admin_rights: "Limited", physical_access: "Business Hours", work_schedule: "Mon-Fri 8-6", remote_access: "Authorized" },
    
    // Sales Team
    { name: "Lisa Anderson", department: "Sales", role: "Sales Manager", database_access: "Customer Data", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 8-6", remote_access: "Authorized" },
    { name: "Robert Kim", department: "Sales", role: "Sales Representative", database_access: "Customer Contacts", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Authorized" },
    { name: "Sophia Lee", department: "Sales", role: "Sales Representative", database_access: "Customer Contacts", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Authorized" },
    { name: "Chris Thompson", department: "Sales", role: "Account Executive", database_access: "Account Data", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 8-6", remote_access: "Authorized" },
    
    // Marketing Team
    { name: "Amanda Taylor", department: "Marketing", role: "Marketing Manager", database_access: "Marketing Analytics", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Authorized" },
    { name: "Michael Brown", department: "Marketing", role: "Content Creator", database_access: "None", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Authorized" },
    { name: "Jennifer White", department: "Marketing", role: "Digital Specialist", database_access: "None", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Authorized" },
    
    // Finance Team
    { name: "John Thompson", department: "Finance", role: "CFO", database_access: "Financial Data", admin_rights: "Financial", physical_access: "Business Hours", work_schedule: "Mon-Fri 8-6", remote_access: "Authorized" },
    { name: "Daniel Martinez", department: "Finance", role: "Accountant", database_access: "Accounting Records", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Limited" },
    { name: "William Garcia", department: "Finance", role: "Financial Analyst", database_access: "Financial Reports", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Limited" },
    
    // HR Team
    { name: "Emma Davis", department: "HR", role: "HR Manager", database_access: "Employee Records", admin_rights: "HR", physical_access: "Business Hours", work_schedule: "Mon-Fri 8-5", remote_access: "Authorized" },
    { name: "Anna Clark", department: "HR", role: "HR Specialist", database_access: "Employee Data", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-5", remote_access: "Limited" },
    
    // Design Team
    { name: "Alex Garcia", department: "Design", role: "Lead Designer", database_access: "Design Assets", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-6", remote_access: "Authorized" },
    
    // DevOps Team (Austin)
    { name: "Peter Johnson", department: "DevOps", role: "Senior DevOps", database_access: "Application Logs", admin_rights: "Limited", physical_access: "Business Hours", work_schedule: "Mon-Fri 8-6", remote_access: "Authorized" },
    
    // Security
    { name: "Richard Hughes", department: "Security", role: "Security Guard", database_access: "None", admin_rights: "None", physical_access: "24/7", work_schedule: "Shift Work", remote_access: "None" },
    { name: "Mark Stevens", department: "Security", role: "Night Security", database_access: "None", admin_rights: "None", physical_access: "Night Shift", work_schedule: "6PM-6AM", remote_access: "None" },
    
    // Service Accounts
    { name: "svc.backup", department: "System", role: "Backup Service", database_access: "All Databases", admin_rights: "Service", physical_access: "N/A", work_schedule: "24/7 Automated", remote_access: "N/A" },
    
    // Temporary Staff
    { name: "Rebecca Carter", department: "HR", role: "Intern", database_access: "None", admin_rights: "None", physical_access: "Business Hours", work_schedule: "Mon-Fri 9-4", remote_access: "None" }
];

// Function to populate employee table
function populateEmployeeTable() {
    const tableBody = document.querySelector('#employeeTable tbody');
    if (!tableBody) {
        console.error('Employee table body not found');
        return;
    }
    
    tableBody.innerHTML = '';
    
    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.role}</td>
            <td>${employee.database_access}</td>
            <td>${employee.admin_rights}</td>
            <td>${employee.physical_access}</td>
            <td>${employee.work_schedule}</td>
            <td>${employee.remote_access}</td>
        `;
        tableBody.appendChild(row);
    });
    
    console.log(`Populated employee table with ${employees.length} employees`);
}

// Auto-populate when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateEmployeeTable);
} else {
    populateEmployeeTable();
}