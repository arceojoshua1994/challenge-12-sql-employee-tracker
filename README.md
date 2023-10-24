# Employee Tracker

An efficient command-line application to manage a company's employee database using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Description

Employee Tracker is designed for business owners who want a simplified interface to view and manage their departments, roles, and employees. With easy-to-navigate command-line prompts, users can organize and plan their business more effectively.

## Installation

1. Install the necessary packages.

2. Set up the database using your preferred MySQL management tool. Navigate to the db folder and execute the schema.sql file. Optionally, to populate the database with sample data, execute the seeds.sql file as well.

3. Update the connection.js file with your MySQL credentials.

## Usage

1. Start the application.

2. Navigate through the options provided in the command-line interface. Choose the desired action and follow the prompts.

## Features

- View all departments with their respective IDs.
- View all roles displaying the title, role ID, associated department, and salary.
- View all employees, including their data, role, department, and reporting manager.
- Add new departments, roles, and employees.
- Update an employee's role.

## Bonus Features (Future Developments)

- Update an employee's manager.
- View employees by manager or department.
- Delete departments, roles, or employees.
- Calculate and view the total utilized budget of a department based on employee salaries.

## Demo

For a complete walkthrough of the application's functionality, click here to view the demonstration video. 

## License

This project is licensed under the MIT License.