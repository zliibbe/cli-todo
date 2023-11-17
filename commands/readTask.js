import { connectDB, disconnectDB } from '../db/connectDB.js'
import Todos from '../schema/TodoSchema.js'
import chalk from 'chalk'
import ora from 'ora'

export default async function readTask() {
  try {
    await connectDB()

    const spinner = ora('Fetching all todos...').start()

    const todos = await Todos.find({})

    spinner.stop()

    if(todos.length===0) {
       console.log(chalk.blueBright('You do not have any tasks yet!'));
    } else {
      todos.forEach(todo => {
        console.log(
          chalk.bgBlue(`code: \n ${todo.code} \n`),
          chalk.bgWhite(`Name: ${todo.name} \n`),
          chalk.bgWhite(`Description: ${todo.detail} \n`)
        )
      })
    }

    await disconnectDB()
  } catch (error) {
    console.log(chalk.red('\nSomething went wrong reading tasks \nError: ', error))
    process.exit(1)
  }
}
