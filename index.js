#!/usr/bin/env node

// Importing the required functions for each command
import createTask from './commands/createTask.js'
import deleteTask from './commands/deleteTask.js'
import readTask from './commands/readTask.js'
import updateTask from './commands/updateTask.js'

// Importing the Command class from Commander.js library
import { Command } from 'commander'

// Creating an instance of the Command class
const program = new Command()

// Setting the name and description of the CLI tool
program
.name('todo')
.description('Your terminal task manager!')
.version('1.0.0')

// Defining a command called 'add'
program
.command('add')
.description('Create a new todo.')
.action(createTask)

// Defining a command called 'read'
program
.command('read')
.description('Reads all the todos.')
.action(readTask)

// Defining a command called 'update'
program
.command('update')
.description('Updates a todo.')
.action(updateTask)

// Defining a command called 'delete'
program
.command('delete')
.description('Deletes a todo.')
.action(deleteTask)

// Parsing the command-line arguments and executing the corresponding actions
program.parse()