import { existsSync, readFileSync, writeFileSync } from 'fs'
import { Log } from '@services'
import { INFOS } from '@shared/strings'
import { DBSchema } from '@shared/types'

class Database {
  private dbFilePath = `${process.cwd()}/database/database.json`
  private dbTemplateFilePath = `${process.cwd()}/database/database.template.json`
  private log = new Log()

  constructor() {
    this.init()
  }

  private getDbTemplate = () =>
    JSON.parse(readFileSync(this.dbTemplateFilePath, 'utf8'))

  private dbExists = () => {
    try {
      if (existsSync(this.dbFilePath)) return true
      return false
    } catch (err) {
      this.log.error(err as Error)
      return false
    }
  }

  init = () => {
    if (this.dbExists()) return

    const dbTemplate = this.getDbTemplate()
    writeFileSync(this.dbFilePath, JSON.stringify(dbTemplate))
    this.log.info(INFOS.dbInitialized)
  }

  getDb = (): DBSchema => JSON.parse(readFileSync(this.dbFilePath, 'utf8'))
  saveDv = (db: DBSchema) => writeFileSync(this.dbFilePath, JSON.stringify(db))
}

export default Database
