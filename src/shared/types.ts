import { Config } from 'config'

type DatabaseDataItem = {
  id: string
  name: string
  created: string
  cfg: Config
  alerts: {
    id: string
    msg: string
    timestamp: string
  }[]
}
export interface DBSchema {
  created: string
  data: DatabaseDataItem[]
}
