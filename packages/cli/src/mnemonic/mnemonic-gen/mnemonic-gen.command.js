const yargs = require('yargs')

const { generateMnemonic } = require('@lerna-test/lib')

const commandYargs = () => yargs
  .usage('$0 mnemonic gen [options]')
  .example('... gen', 'Generates a random mnemonic')
  .help()
  .alias('h', 'help')

module.exports = [
  'gen',
  'gen commands',
  commandYargs,
  () => {
    const mnemonic = generateMnemonic()
    console.log(mnemonic)
    process.exit()
  },
]
