// Employee Access Matrix Data
const employees = [
    {username: "james.wilson", department: "Executive", role: "CEO", databaseAccess: "Read-Only", adminRights: "No", physicalAccess: "24/7", workSchedule: "Flexible", remoteAccess: "Yes"},
    {username: "sarah.martinez", department: "Marketing", role: "Manager", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM", remoteAccess: "Yes"},
    {username: "michael.davis", department: "Marketing", role: "Specialist", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM", remoteAccess: "No"},
    {username: "emily.rodriguez", department: "Marketing", role: "Coordinator", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 6 PM", remoteAccess: "No"},
    {username: "john.thompson", department: "Finance", role: "Manager", databaseAccess: "Billing Only", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 6 PM", remoteAccess: "Yes"},
    {username: "jennifer.brown", department: "Finance", role: "Analyst", databaseAccess: "Billing Only", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "Yes"},
    {username: "robert.garcia", department: "Finance", role: "Analyst", databaseAccess: "Billing Only", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "No"},
    {username: "lisa.anderson", department: "HR", role: "Manager", databaseAccess: "Employee Records", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "Yes"},
    {username: "david.miller", department: "HR", role: "Specialist", databaseAccess: "Employee Records", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM", remoteAccess: "No"},
    {username: "amanda.taylor", department: "Sales", role: "Director", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 7 PM", remoteAccess: "Yes"},
    {username: "christopher.lee", department: "Sales", role: "Manager", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 6 PM", remoteAccess: "Yes"},
    {username: "jennifer.davis", department: "Sales", role: "Rep", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 6 PM", remoteAccess: "Yes"},
    {username: "matthew.white", department: "Sales", role: "Rep", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 6 PM", remoteAccess: "No"},
    {username: "stephanie.clark", department: "Sales", role: "Rep", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "No"},
    {username: "daniel.moore", department: "Sales", role: "Rep", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 6 PM", remoteAccess: "No"},
    {username: "lauren.hall", department: "Sales", role: "Coordinator", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "No"},
    {username: "kevin.young", department: "Operations", role: "Manager", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "7 AM - 6 PM", remoteAccess: "Yes"},
    {username: "michelle.king", department: "Operations", role: "Analyst", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "No"},
    {username: "david.wilson", department: "IT", role: "Director", databaseAccess: "No", adminRights: "Yes", physicalAccess: "Extended", workSchedule: "7 AM - 7 PM", remoteAccess: "Yes"},
    {username: "brian.johnson", department: "IT", role: "Admin", databaseAccess: "No", adminRights: "Yes", physicalAccess: "Extended", workSchedule: "8 AM - 6 PM", remoteAccess: "Yes"},
    {username: "ashley.adams", department: "IT", role: "Support", databaseAccess: "No", adminRights: "Limited", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "No"},
    {username: "mike.chen", department: "DevOps", role: "Lead Engineer", databaseAccess: "No", adminRights: "Server Admin", physicalAccess: "Standard", workSchedule: "Remote", remoteAccess: "Yes"},
    {username: "alex.smith", department: "DevOps", role: "Engineer", databaseAccess: "No", adminRights: "Limited", physicalAccess: "Standard", workSchedule: "Remote", remoteAccess: "Yes"},
    {username: "tyler.jones", department: "Development", role: "Senior Dev", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "10 AM - 6 PM", remoteAccess: "Yes"},
    {username: "natalie.green", department: "Development", role: "Developer", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM", remoteAccess: "No"},
    {username: "carlos.rivera", department: "Development", role: "Developer", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 6 PM", remoteAccess: "No"},
    {username: "samantha.parker", department: "Development", role: "Junior Dev", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM", remoteAccess: "No"},
    {username: "jessica.lewis", department: "QA", role: "Lead Tester", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM", remoteAccess: "No"},
    {username: "rachel.hill", department: "Design", role: "Lead Designer", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "10 AM - 6 PM", remoteAccess: "Yes"},
    {username: "nicole.baker", department: "EU Sales", role: "Manager", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM GMT", remoteAccess: "Yes"},
    {username: "james.cooper", department: "EU Sales", role: "Rep", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM GMT", remoteAccess: "No"},
    {username: "hannah.wright", department: "EU Support", role: "Specialist", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 6 PM GMT", remoteAccess: "No"},
    {username: "oliver.edwards", department: "EU Support", role: "Specialist", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "9 AM - 5 PM GMT", remoteAccess: "No"},
    {username: "sophie.turner", department: "EU Operations", role: "Coordinator", databaseAccess: "No", adminRights: "No", physicalAccess: "Standard", workSchedule: "8 AM - 5 PM GMT", remoteAccess: "No"},
    {username: "rebecca.carter", department: "Internship", role: "Marketing Intern", databaseAccess: "No", adminRights: "No", physicalAccess: "Escorted Only", workSchedule: "9 AM - 5 PM", remoteAccess: "No"},
    {username: "richard.hughes", department: "Security", role: "Guard", databaseAccess: "No", adminRights: "No", physicalAccess: "24/7", workSchedule: "Night Shift", remoteAccess: "No"},
    {username: "jacob.turner", department: "Security", role: "Guard", databaseAccess: "No", adminRights: "No", physicalAccess: "24/7", workSchedule: "Day Shift", remoteAccess: "No"},
    {username: "joshua.phillips", department: "Facilities", role: "Maintenance", databaseAccess: "No", adminRights: "No", physicalAccess: "Extended", workSchedule: "6 AM - 4 PM", remoteAccess: "No"}
];

// Function to populate employee table
function populateEmployeeTable() {
    const tableBody = document.getElementById('employeeTableBody');
    if (tableBody) {
        tableBody.innerHTML = employees.map(emp => `
            <tr>
                <td>${emp.username}</td>
                <td>${emp.department}</td>
                <td>${emp.role}</td>
                <td>${emp.databaseAccess}</td>
                <td>${emp.adminRights}</td>
                <td>${emp.physicalAccess}</td>
                <td>${emp.workSchedule}</td>
                <td>${emp.remoteAccess}</td>
            </tr>
        `).join('');
    }
}

// Load employee data when DOM is ready
document.addEventListener('DOMContentLoaded', populateEmployeeTable);