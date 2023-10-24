USE company_db;

-- Departments
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('HR');

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ('Sales Executive', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('HR Manager', 60000, 3);

-- Employees
INSERT INTO employee (first_name, last_name, role_id) VALUES ('John', 'Doe', 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
