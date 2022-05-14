const clear = require("clear");
const commander = require("commander");

const { printText } = require('./src/text')

commander
  .command("init")
  .description("Hello world")
  .action(() => {
    clear();
    const text = printText('Origin Cli')
    console.log(text);
  });

commander
  .command("cc")
  .description("create component")
  .action(() => {
    clear();
    console.log('begin create component');
  })

commander.parse(process.argv);

if (!commander.args.length) {
  commander.help();
}
