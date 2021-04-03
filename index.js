const chalk = require('chalk')

const info = console.info
const warn = console.warn
const error = console.error

console.info = (...params) => info(chalk.blue(...params))
console.warn = (...params) => warn(chalk.yellowBright(...params))
console.error = (...params) => error(chalk.redBright(...params))
