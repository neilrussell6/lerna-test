const yargs = require('yargs')

const { command: mnemonicGenCommand } = require('./mnemonic-gen')

const commandYargs = () => yargs
  .usage('mnemonic')
  .command(...mnemonicGenCommand)
  .help()
  .alias('h', 'help')

module.exports = [
  'mnemonic',
  'mnemonic commands',
  commandYargs,
]
