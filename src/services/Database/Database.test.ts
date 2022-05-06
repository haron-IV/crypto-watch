import { assert, expect } from 'chai'
import { existsSync } from 'fs'
import Database from './Database'

describe('services/Database', () => {
  describe('init()', () => {
    it('Should return undefined while there is database already initialized', () => {
      const db = new Database()
      const result = db.init()

      expect(result).to.equal(undefined)
    })

    it('should initialize database', () => {
      const db = new Database()
      db.init()

      assert.isOk(existsSync(db.dbFilePath))
    })
  })

  describe('getDb()', () => {
    it('Should return db object', () => {
      const db = new Database()
      const result = db.getDb()

      expect(result).to.be.an('object')
    })
  })
})
