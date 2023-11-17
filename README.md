# CLI Task Manager aka todo App
A simple Task Manager CLI tool that uses commands to Create, View, Update, or Delete todos built using NodeJS and MongoDB as the database.

Here are the commands you can use to operate the tool:

* `todo add`  to create a new task.
* `todo read` to read all your pending tasks.
* `todo update` to update a specific task.
* `todo delete` to delete a task.
  
You can also use these 2 options using the tool:

* `todo --version` | `todo -V` to know the version number of this tool.
* `todo --help` | `todo -h` to display help for command.

## Dependencies
* [Commander.js](https://www.npmjs.com/package/commander) helps me build the CLI tool.

* [chalk](https://www.npmjs.com/package/chalk) makes messages in the terminal colorful and easy to read.

* [inquirer](https://www.npmjs.com/package/inquirer) lets me ask the user for input.

* [ora](https://www.npmjs.com/package/ora) makes the terminal show nice spinning animations.

## Documentation

This repo makes use of this [tutorial](https://www.freecodecamp.org/news/nodejs-tutorial-build-a-task-manager-cli-tool/) via freeCodeCamp.

As this project uses MongoDB, I found this documentation for [MongoDB Atlas](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/) particularly helpful.