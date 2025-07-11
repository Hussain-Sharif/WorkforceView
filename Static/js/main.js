
document.addEventListener('DOMContentLoaded', () => {
    let filteredEmployees = EmployeeManager.getAll(); // Current Filtered Employee cards
  
    function refreshList() {
      UIController.renderList(filteredEmployees);
    }
  
    // Initial render
    refreshList();
  
    // Add Employee
    document.getElementById('add-employee-btn').onclick = () => {
      UIController.showForm();
      bindForm(null);
    };
  
    // Edit/Delete Handlers
    document.getElementById('employee-list-container').onclick = (e) => {
      const id = Number(e.target.dataset.id);
      const emp = EmployeeManager.getById(id); // getting employee object
      if (e.target.classList.contains('edit-btn')) { // here we are making edits 
        UIController.showForm(emp); // showing the Form with respective data of the emp obj
        bindForm(id); // 
      } else if (e.target.classList.contains('delete-btn')) {

        if (confirm(`Want to delete Employee ${emp.firstName}?`)) {
          EmployeeManager.remove(id);
          filteredEmployees = EmployeeManager.getAll();
          refreshList();
        }
      }
    };
  
    // Search
    document.getElementById('search-input').oninput = (e) => {
      const query = e.target.value.toLowerCase();
      filteredEmployees = EmployeeManager.search(query);
      refreshList();
    };
  
    // Filter panel
    document.getElementById('filter-btn').onclick = () => {
      document.getElementById('filter-panel').classList.toggle('hidden');
    };

    document.getElementById('close-filter').onclick = () => {
        document.getElementById('filter-panel').classList.toggle('hidden');
      };
  
    document.getElementById('apply-filter-btn').onclick = () => {
      const firstName = document.getElementById('filter-firstName').value;
      const department = document.getElementById('filter-department').value;
      const role = document.getElementById('filter-role').value;
      filteredEmployees = EmployeeManager.filter({ firstName, department, role });
      refreshList();
    };
  
    document.getElementById('clear-filter-btn').onclick = () => {
      document.getElementById('filter-firstName').value = '';
      document.getElementById('filter-department').value = '';
      document.getElementById('filter-role').value = '';
      filteredEmployees = EmployeeManager.getAll();
      refreshList();
    };
  
    // Sort
    document.getElementById('sort-select').onchange = (e) => {
      const by = e.target.value;
      if (by) filteredEmployees = EmployeeManager.sort(by);
      else filteredEmployees = EmployeeManager.getAll();
      refreshList();
    };
  
    // Form handlers
    function bindForm(editId) { // Reused method whenever the form is submitted/Cancelled 
      const form = document.getElementById('employee-form');
      form.onsubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(form));
        const errors = validateForm(data);
        
        if (errors.length) { // VALIDATING THE errors
          UIController.showErrors(errors);
          return;
        }
        if (editId) {
          EmployeeManager.update(editId, data); // Updateding the Existing employee details
        } else {
          EmployeeManager.add(data); // Employee Details
        }
        filteredEmployees = EmployeeManager.getAll();
        UIController.hideForm();
        refreshList();
      };
      document.getElementById('cancel-btn').onclick = () => {
        UIController.hideForm();
      };
    }
  
    function validateForm(data) {
      const errors = [];
      if (!data.firstName) errors.push("First Name required");
      if (!data.lastName) errors.push("Last Name required");
      if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.push("Valid Email required"); // here i used regex
      if (!data.department) errors.push("Department required"); 
      if (!data.role) errors.push("Role required"); 
      return errors;
    }
  });
  