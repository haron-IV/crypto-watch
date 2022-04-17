import { SupportedCryptocurrencies } from './src/app/types'
/*
cryptoConfig:
  active - if false alert will not be send
  save - save alert info in file
  alertPrice - Value in USD, number

appConfig:
  checkInterval - value (minutes, hours, days)
*/

export enum IntervalValueType {
  minutes = 'minutes',
  hours = 'hours',
  days = 'days',
}

const cryptoConfig = [
  {
    cryptocurrencyName: SupportedCryptocurrencies.Bitcoin,
    alertPrice: { under: 35000, over: 50000 },
    active: true,
    save: false,
  },
]

const appConfig = {
  checkInterval: 30,
  intervalValueType: IntervalValueType.minutes,
}

export const config = {
  appConfig,
  cryptoConfig,
}

export type Config = typeof config
