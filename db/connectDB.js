import dotenv from 'dotenv'
import mongoose from 'mongoose'
import ora from 'ora'
import chalk from 'chalk'

dotenv.config()

export async function connectDB(){
  try {
      const spinner = ora('Connecting to the database...').start()
      await mongoose.connect(process.env.MONGO_URI)
      spinner.stop()
      console.log(chalk.greenBright('Successfully connected to database!!!'))   
  } catch (error) {
      console.log(chalk.redBright('Error connecting to database: '), error);
      process.exit(1) 
  }
}

export async function disconnectDB(){
  try {
      await mongoose.disconnect()
      console.log(chalk.greenBright('Disconnected from the database.'))
  } catch(err) {
      console.log(chalk.redBright('Error disconnecting from database: '), error);
      process.exit(1) 
  }
}

connectDB()
disconnectDB()
