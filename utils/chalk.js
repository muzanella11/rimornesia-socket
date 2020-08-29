const chalk = require('chalk')

const successChalk = chalk.green
const errorChalk = chalk.bold.red

module.exports = {
  success: successChalk,
  error: errorChalk
}