import { Config } from 'config'

type DatabaseDataItem = {
  id: string
  name: string
  created: string
  cfg: Config // TODO: config should be extended to store target mail & API key
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
