/*
cryptoConfig:
  active - if false alert will not be send
  save - save alert info in file

appConfig:
  checkInterval - value (minutes, hours, days) number
*/

export enum IntervalValueType {
  minutes,
  hours,
  days,
}

const cryptoConfig = [
  {
    cryptocurrencyName: 'bitcoin',
    alertPrice: { under: 10000, over: 20000 },
    active: true,
    save: false,
  },
]

const appConfig = {
  checkInterval: 1,
  intervalValueType: IntervalValueType.minutes,
}

const config = {
  appConfig,
  cryptoConfig,
}

export type Config = typeof config
export default config
