import * as Bip39 from 'bip39'

// ---------------------------------
// generate mnemonic
// ---------------------------------

export const generateMnemonic = (): string => Bip39.generateMnemonic()
