const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(chalk.red('error'))
const greenMsg = chalk.green.bold.bgBlue.inverse('Success')
console.log(greenMsg)