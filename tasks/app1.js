const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(chalk.green.bgBlue('Success'))
const greenMsg = chalk.green.bold.bgBlue.inverse('Success')
console.log(greenMsg)