import { Config } from 'config'
import { SupportedCryptocurrencies } from './enums'

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

export interface CryptoAlertTemplateProps {
  cryptocurrencyName: SupportedCryptocurrencies
  priceException: number
  convertedTo: string
  cryptocurrencyPrice: number
}
