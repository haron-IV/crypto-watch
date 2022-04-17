import { CoinMarketCap, Mailer } from '../services'
import { config } from '../../config'
import { createInterval, getDateTime } from './utils'
import { priceIsOver, priceIsUnder } from '../services/Mailer/mailTemplate'

const { cryptoConfig, appConfig } = config
const crypto = new CoinMarketCap.Cryptocurrency()
const mailer = new Mailer.Mailer()

const checkPrice = async () => {
  cryptoConfig.forEach(async ({ cryptocurrencyName, alertPrice }) => {
    const price = await crypto.getCryptoCurrencyPrice(cryptocurrencyName)

    if (price < alertPrice.under) {
      const mail = priceIsUnder(cryptocurrencyName, alertPrice.under)
      mailer.sendMail(mail.subject, mail.html)
    } else if (price > alertPrice.over) {
      const mail = priceIsOver(cryptocurrencyName, alertPrice.over)
      mailer.sendMail(mail.subject, mail.html)
    } else {
      console.log(`[ ${getDateTime()} ] - Price checked`)
    }
  })
}

export const app = () => {
  console.log('App has been started with config: ', cryptoConfig, appConfig)
  createInterval(checkPrice)
}
