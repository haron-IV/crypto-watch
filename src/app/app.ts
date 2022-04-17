import { CoinMarketCap, Mailer } from '../services'
import { config } from '../../config'
import { convertTime } from './utils'

const { appConfig, cryptoConfig } = config
const crypto = new CoinMarketCap.Cryptocurrency()
const mailer = new Mailer.Mailer()

const createInterval = (task: () => void) => {
  const intervalTime = appConfig.checkInterval
  const intervalType = appConfig.intervalValueType

  const interval = setInterval(() => {
    task()
  }, convertTime(intervalTime, intervalType))

  return interval
}

const checkPrice = async () => {
  cryptoConfig.forEach(async ({ cryptocurrencyName, alertPrice }) => {
    const price = await crypto.getCryptoCurrencyPrice(cryptocurrencyName)
    if (price < alertPrice.under) {
      console.log('ALE SPADŁO MUSISZ KUPIĆ')
      mailer.sendMail('ALE SPADŁO MUSISZ KUPIĆ', 'KRYPTO SPADLO')
    }
    if (price > alertPrice.over) {
      mailer.sendMail('ALE UROSŁO MUSISZ SPRZEDAĆ', 'KRYPTO UROSŁO')
      console.log('ALE UROSŁO MUSISZ SPRZEDAĆ')
    }
  })
}

export const app = () => {
  createInterval(checkPrice)
}
