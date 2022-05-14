const chalk = require("chalk");
const figlet = require("figlet");

exports.printText = function (str) {
  return chalk.magenta(figlet.textSync(str, {
    hosrizontalLayout: "full",
  }))
}