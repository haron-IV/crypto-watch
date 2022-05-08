import { expect } from 'chai'
import { getCurrentYear } from './utils'

describe('shared/utils', () => {
  describe('getCurrentYear()', () => {
    it('Should return current year', () => {
      const currentYear = getCurrentYear()
      expect(currentYear).to.equal(new Date().getFullYear())
    })
  })
})
