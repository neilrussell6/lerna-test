const yargs = require('yargs')

const { command: mnemonicCommand } = require('./mnemonic')

const run = () => yargs
  .usage('Command line tool')
  .version('0.1.0')
  .command(...mnemonicCommand)
  .help()
  .alias('h', 'help')
  .argv

if (require.main === module) {
  run()
}

module.exports.cli = run
