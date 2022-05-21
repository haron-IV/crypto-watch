import { SupportedCryptocurrencies } from './enums'

export interface CryptoAlertTemplateProps {
  cryptocurrencyName: SupportedCryptocurrencies
  priceException: number
  convertedTo: string
  cryptocurrencyPrice: number
}

export interface ImageListValue {
  filename: string
  path: string
  cid: string
}

// Database types:
export interface DBSchema {
  created: string
  statistics: {
    signedAPIKeys: number
    mailsSent: number
    lastSignedAPIKey: {
      date: string
      key: string
    }
  }
  apiKeys: string[]
}

interface CryptoConfig {
  cryptocurrencyName: SupportedCryptocurrencies
  alertPrice: {
    under: number
    over: number
  }
  active: boolean
  save: boolean
  email: string
}

interface AlertItem {
  created: string
  message: string
  cryptocurrencyName: SupportedCryptocurrencies
  price: number
  alertType: 'under' | 'over'
}

export interface UserDB {
  created: string
  cryptoConfig: CryptoConfig[]
  data: {
    lastLogin: string // date
    lastAlert: AlertItem
    pin: number
    email: string
    registrationConfirmed: boolean
    alerts: AlertItem[]
  }
}
