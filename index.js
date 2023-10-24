const inquirer = require('inquirer');
const connection = require('./connection');

async function mainMenu() {
  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ]
  });

  switch (choice) {
    case 'View all departments':
      await viewAllDepartments();
      break;
    case 'View all roles':
      await viewAllRoles();
      break;

    case 'Exit':
      connection.end();
      process.exit();
  }
}

async function viewAllDepartments() {
  const [rows] = await connection.query('SELECT * FROM department');
  console.table(rows);
  await mainMenu();
}

async function viewAllRoles() {
  const [rows] = await connection.query('SELECT * FROM role');
  console.table(rows);
  await mainMenu();
}


async function addDepartment() {
    const { name } = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'Enter department name:',
    });
  
    await connection.query('INSERT INTO department (name) VALUES (?)', [name]);
    console.log(`Added department: ${name}`);
    await mainMenu();
  }
  
  async function addRole() {
    const departments = await connection.query('SELECT * FROM department');
    const departmentChoices = departments[0].map(dept => ({ name: dept.name, value: dept.id }));
  
    const { title, salary, departmentId } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter role title:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter role salary:',
      },
      {
        type: 'list',
        name: 'departmentId',
        message: 'Select department:',
        choices: departmentChoices
      }
    ]);
  
    await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    console.log(`Added role: ${title}`);
    await mainMenu();
  }
  

mainMenu();
