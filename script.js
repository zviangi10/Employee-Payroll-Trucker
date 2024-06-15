//Get a reference to #add-employees-btn element
const addEmployeeBtn = document.getElementById("add-employees-btn");

addEmployeeBtn.addEventListener("click", function () {
  //const firstName = prompt('Enter employee\'s first name:');
  //const lastName = prompt('Enter employee\'s last name:');
  //const salary = prompt('Enter employee\'s salary:');
  //console.log('userInput');
});

//Collect employee data
const collectEmployees = function () {
  const employees = [];
  //Set the variabe for input data equal to an empty array
  let continueAdding = true;
  //set a variabe to set a while loop to the full list of item to the array
  while (continueAdding) {
    let firstName = prompt("Add First Name");
    let lastName = prompt("Add Last Name");
    let employeeSalary = prompt("Add Salary");

    //Created a while loop to promt user input
    salary =
      isNaN(employeeSalary) || employeeSalary === null
        ? 0
        : Number(employeeSalary);

    //Set the variable and arguments.
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });
    //Created the object with first name ,last name and salary
    continueAdding = confirm("You Want To Add Another Employee?");
    //Set a confirm prompt
  }

  return employees;

  //TODO: Get user input to create and return an array of employee object
};
// Display the avarage salary
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  //Calculated the total salary
  const avarageSalary = totalSalary / employeesArray.length;
  //Set the current variable to the array after employees added
  console.log(
    'The average employee salary between our ${current}employee(s) is ${averageSalary.toLocaleString("en-US",{style: "currency", currency:  "USD"})}'
  );
};

//Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  const randomEmployee = employeesArray[randomIndex];

  //Set the variab;e for the random employee sellection mand it be equal
  console.log("Congratulations you are the Winner ${randomEmployee.firstName}");

  //TODO:Select and display random employee
};

/*
==================
*/

//Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get employee table
  const employeeTable = document.querySelector("#employee-table");

  //Clear the employee table
  employeeTable.innerHTML = "";

  //Loop through the employee data and create a row
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    //Format the salary
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("=====================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

//Add event listener to 'ADD EMPLOYEES' BTN

addEmployeeBtn.addEventListener("click", trackEmployeeData);
