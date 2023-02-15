const departments = await Deparatment.findAll();

console.log(department.name)
console.log(department.id);



inquirer.prompt([
    {
        type: 'input',
        name: 'role',
        message: "What department is this role in?",
        choices: [{
            name: "Accounting",
            value: 4
        }]
    }
])