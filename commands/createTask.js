import inquirer from "inquirer";
import { connectDB, disconnectDB } from '../db/connectDB.js'
import Todos from "../schema/TodoSchema.js";
import ora from "ora";
import chalk from "chalk";

async function input() {
  const answers = await inquirer.prompt([
    {name: 'name', message: 'Enter name of task:', type:'input'},
    {name: 'detail', message: 'Enter the details of the task:', type: 'input'}
  ])

  return answers
}

const askQuestions = async() => {

  const todoArray = []
  let loop = false

  do {
    const userRes = await input()
    todoArray.push(userRes)
    const confirmQ = await inquirer.prompt([{ name: 'confirm', message: 'Do you want to add more tasks?', type: 'confirm' }])
    if(confirmQ.confirm) {
      loop=true
    } else {
      loop=false
    } 
  } while(loop)

  return todoArray
}

export default async function addTask() {
  try {
    const userResponse = await askQuestions();

    await connectDB()

    let spinner = ora('Creating the todos...').start()

    for(let i=0; i<userResponse.length; i++) {
      const response = userResponse[i]
      await Todos.create(response)

      spinner.stop()
      console.log(chalk.greenBright('Todos created!'))

      await disconnectDB()
    }
  } catch(error) {
    console.log(chalk.red('\nSomething went wrong adding tasks \nError: ', error))
    process.exit(1)
  }

}
