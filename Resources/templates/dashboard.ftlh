<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Directory</title>
  <link rel="stylesheet" href="/Static/css/style.css">
</head>
<body>
  <div id="app">
    <header>
      <h1>Employee Directory</h1>
      <button id="add-employee-btn">Add Employee</button>
      <input type="text" id="search-input" placeholder="Search by name or email">
      <button id="filter-btn">Filter</button>
      <select id="sort-select">
        <option value="">Sort By</option>
        <option value="firstName">First Name</option>
        <option value="department">Department</option>
      </select>
    </header>
    <div id="filter-panel" class="hidden">
      <input type="text" id="filter-firstName" placeholder="First Name">
      <input type="text" id="filter-department" placeholder="Department">
      <input type="text" id="filter-role" placeholder="Role">
      <button id="apply-filter-btn">Apply Filter</button>
      <button id="clear-filter-btn">Clear</button>
    </div>
    <div id="employee-list-container">
      <#list employees as employee>
        <div class="employee-card" data-employee-id="${employee.id}">
          <h3>${employee.firstName} ${employee.lastName}</h3>
          <p>ID: ${employee.id}</p>
          <p>Email: ${employee.email}</p>
          <p>Department: ${employee.department}</p>
          <p>Role: ${employee.role}</p>
          <button class="edit-btn" data-id="${employee.id}">Edit</button>
          <button class="delete-btn" data-id="${employee.id}">Delete</button>
        </div>
      </#list>
    </div>
    <div id="pagination-controls"></div>
    <div id="form-modal" class="hidden"></div>
  </div>
  <script src="/Static/js/data.js"></script>
  <script src="/Static/js/employeeManager.js"></script>
  <script src="/Static/js/uiController.js"></script>
  <script src="/Static/js/app.js"></script>
</body>
</html>
