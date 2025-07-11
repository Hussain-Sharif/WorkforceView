
const UIController = (() => { //it's a IIFE/Higher order funtion which returns an Object contains below secondary functions as methods to that returned Object
    
    // I tried to match the freemarker template list directive for every method in below 
    
    function renderList(employees) {
      const container = document.getElementById('employee-list-container');
      container.innerHTML = '';
      if(!employees.length) {
        container.innerHTML = 'Click "+Add Employee" to Create Employee Cards or Remove Filters';
      }else{
        employees.forEach(emp => {
            const card = document.createElement('div');
            card.className = 'employee-card';
            card.dataset.employeeId = emp.id;
            
            card.innerHTML = ` 
              <h3>${emp.firstName} ${emp.lastName}</h3>
              <p>ID: ${emp.id}</p>
              <p>Email: ${emp.email}</p>
              <p>Department: ${emp.department}</p>
              <p>Role: ${emp.role}</p>
              <button class="edit-btn" data-id="${emp.id}">Edit</button>
              <button class="delete-btn" data-id="${emp.id}">Delete</button>
            `;
            container.appendChild(card);
          });
      }
      
    }
  
    function showForm(employee = null) {
      const modal = document.getElementById('form-modal');
      modal.classList.remove('hidden');
      // I can INclude "required" attribute at input Element. but, I want to validate manually based on the Data from User I haven't used it  
      modal.innerHTML = `
      <form id="employee-form">
        <h2>All Fields are required*</h2>
          <input type="text" name="firstName" placeholder="First Name" value="${employee ? employee.firstName : ''}" >
          <input type="text" name="lastName" placeholder="Last Name" value="${employee ? employee.lastName : ''}" >
          <input type="email" name="email" placeholder="Email" value="${employee ? employee.email : ''}" >
          <input type="text" name="department" placeholder="Department" value="${employee ? employee.department : ''}" >
          <input type="text" name="role" placeholder="Role" value="${employee ? employee.role : ''}" >
          <button class="submit-btn" type="submit">${employee ? 'Update' : 'Add'}</button>
          <button type="button" class="cancel-btn" id="cancel-btn">Cancel</button>
          <div id="form-errors"></div>
        </form>
      `;
    }
  
    function hideForm() {
      document.getElementById('form-modal').classList.add('hidden');
      document.getElementById('form-modal').innerHTML = '';
    }
  
    function showErrors(errors) {
      const errorDiv = document.getElementById('form-errors');
      errorDiv.innerHTML = errors.map(e => `<p class="error">${e}</p>`).join('');
    }

    return { renderList, showForm, hideForm, showErrors };
  })();
  