
const EmployeeManager = (
    () => {
    let employees = [...mockEmployees];
  
    function getAll() { // getting All Current Filtered Array of Employee cards
      return employees;
    }
  
    function add(employee) { // Create/add new employee into current Array of Employees
      employee.id = Date.now(); // best to have unique ID 
      employees.push(employee);
    }
  
    function update(id, updatedData) { // UPdating the Chosen Employee card 
      const idx = employees.findIndex(emp => emp.id === id);
      if (idx !== -1) employees[idx] = { ...employees[idx], ...updatedData };
    }
  
    function remove(id) { // Deleting the Employee Card
      employees = employees.filter(emp => emp.id !== id);
    }
  
    function filter({ firstName, department, role }) { // Filtering the Employee Cards based on the firstname, department, role..
      return employees.filter(emp => // here we are making !for all parameters to ensure if empty strings are passed then filter's callback should return true  
        (!firstName || emp.firstName.toLowerCase().includes(firstName.toLowerCase())) && // Taken care while filtering the names to match Cases 
        (!department || emp.department.toLowerCase().includes(department.toLowerCase())) &&
        (!role || emp.role.toLowerCase().includes(role.toLowerCase()))
      );
    }
  
    function search(query) { // searching for first name, last name, email
      return employees.filter(emp =>
        emp.firstName.toLowerCase().includes(query) ||
        emp.lastName.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query)
      );
    }
  
    function sort(by) { // sorting for employees list 
      return [...employees].sort((a, b) =>
        a[by].localeCompare(b[by]) // best way to sort the things in array like Data
      );
    }
  
    function getById(id) { // to get the employee object based on ID 
      return employees.find(emp => emp.id === id);
    }
  
    return { getAll, add, update, remove, filter, search, sort, getById };
  })();
  