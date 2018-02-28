/*eslint-env browser*/

// ------------The Employee Management Application-------------

function displayMenu() {
    "use strict"
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - show all employees");
    window.console.log("add - add an emplyee");
    window.console.log("del - delete an employee");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function show(emloyeeList) {
    "use strict"
    var i = 1;
    emloyeeList.forEach(function(employee) {
        window.console.log(String(i) + ". " + employee);
        i +=1;
    });
    window.console.log("");                  
}

function add(emloyeeList) {
    "use strict"
    var emlpoyee = window.prompt("Enter the employee's name");
    emloyeeList.push(emlpoyee);
    window.console.log(emlpoyee + " was added.");
    window.console.log("");
}

function del(emloyeeList) {
    "use strict"
    var num, employee;
    num = parseInt(window.prompt("Employee's number to delete."), 10);
    if (num < 1 || num > emloyeeList.length) {
        window.alert("Invalid emploee number");
    } else {
        employee = emloyeeList.splice(num - 1, 1);
        window.console.log(employee + " was deleted.");
    }
}

function main() {
    "use strict"
    var employeeList, command;
    
    displayMenu();
    
    employeeList = ["John Wayne", 
                    "Bruce Lee", 
                    "Fred Franklin", 
                    "Joan Krust", 
                    "David Duhovny"];
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                show(employeeList);
            } else if (command === "add") {
                add(employeeList);
            } else if (command === "del") {
                del(employeeList);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Command is not valid");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}

main();