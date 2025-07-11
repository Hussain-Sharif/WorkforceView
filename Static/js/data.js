
// let  mockEmployees = [
//     { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', department: 'HR', role: 'Manager' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', department: 'IT', role: 'Developer' },
//     { id: 3, firstName: 'Modi', lastName: 'PM', email: 'modi@example.com', department: 'Govt', role: 'PM' },
//     { id: 4, firstName: 'KCR', lastName: 'BSR', email: 'kcr@example.com', department: 'Govt', role: 'Minister' },
//     { id: 5, firstName: 'Pavan', lastName: 'Kalyan', email: 'pavan@example.com', department: 'Movies', role: 'Hero' },
//     // Add more mock employees as needed
// ];

let mockEmployees = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', department: 'HR', role: 'Manager' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', department: 'IT', role: 'Developer' },
    { id: 3, firstName: 'Modi', lastName: 'PM', email: 'modi@example.com', department: 'Govt', role: 'PM' },
    { id: 4, firstName: 'KCR', lastName: 'BSR', email: 'kcr@example.com', department: 'Govt', role: 'Minister' },
    { id: 5, firstName: 'Pavan', lastName: 'Kalyan', email: 'pavan@example.com', department: 'Movies', role: 'Hero' },
    { id: 6, firstName: 'Elon', lastName: 'Musk', email: 'elon@example.com', department: 'Engineering', role: 'CTO' },
    { id: 7, firstName: 'Sundar', lastName: 'Pichai', email: 'sundar@example.com', department: 'IT', role: 'CEO' },
    { id: 8, firstName: 'Satya', lastName: 'Nadella', email: 'satya@example.com', department: 'Tech', role: 'CEO' },
    { id: 9, firstName: 'Virat', lastName: 'Kohli', email: 'virat@example.com', department: 'Sports', role: 'Cricketer' },
    { id: 10, firstName: 'Rohit', lastName: 'Sharma', email: 'rohit@example.com', department: 'Sports', role: 'Captain' },
    { id: 11, firstName: 'Nithin', lastName: 'Reddy', email: 'nithin@example.com', department: 'Politics', role: 'MLA' },
    { id: 12, firstName: 'Keerthi', lastName: 'Suresh', email: 'keerthi@example.com', department: 'Movies', role: 'Actress' },
    { id: 13, firstName: 'Prabhas', lastName: 'Raju', email: 'prabhas@example.com', department: 'Movies', role: 'Actor' },
    { id: 14, firstName: 'Shreya', lastName: 'Ghosal', email: 'shreya@example.com', department: 'Music', role: 'Singer' },
    { id: 15, firstName: 'Neha', lastName: 'Kakkar', email: 'neha@example.com', department: 'Music', role: 'Singer' },
    { id: 16, firstName: 'APJ', lastName: 'Kalam', email: 'apj@example.com', department: 'Science', role: 'Scientist' },
    { id: 17, firstName: 'Kriti', lastName: 'Sanon', email: 'kriti@example.com', department: 'Movies', role: 'Heroine' }
  ];
  

// mockEmployees=Array(10).fill(...mockEmployees).map((eachEmp,ind)=>({
//     ...eachEmp,
//     id:Date.now()+ind
// }));

const paginationControlLimits=[5,10,20,50]