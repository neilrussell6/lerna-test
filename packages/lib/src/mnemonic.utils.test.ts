import { split } from 'ramda'

import * as SUT from './mnemonic.utils'

describe('common/crypto/mnemonic.utils', () => {
  describe('generateMnemonic', () => {
    it('should generate a 12 word mnemonic', () => {
      const result = SUT.generateMnemonic()
      const resultWords = split(' ')(result)
      expect(resultWords.length).toEqual(12)
    })
  })
})
