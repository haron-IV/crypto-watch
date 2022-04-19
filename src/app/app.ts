import {
  CoinMarketCap,
  Mailer,
  Log,
  priceIsOver,
  priceIsUnder,
} from '@services'
import { INFOS } from '@shared/strings'
import { config } from 'config'
import { SupportedCryptocurrencies } from './types'
import { createInterval } from './utils'

const { cryptoConfig, appConfig } = config
const crypto = new CoinMarketCap.Cryptocurrency()
const mailer = new Mailer()
const { info } = new Log()

type AlertPrice = { under: number; over: number }
type PriceCheckFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  alertPrice: AlertPrice
) => void

const priceIsUnderExpectation: PriceCheckFn = (
  cryptocurrencyName,
  alertPrice
) => {
  const mail = priceIsUnder(cryptocurrencyName, alertPrice.under)
  mailer.sendMail(mail.subject, mail.html)
  info(`${INFOS.priceIsUnderExpectation} ${INFOS.emailHasBeenSent}`)
}

const priceIsOverExpectation: PriceCheckFn = (
  cryptocurrencyName,
  alertPrice
) => {
  const mail = priceIsOver(cryptocurrencyName, alertPrice.over)
  mailer.sendMail(mail.subject, mail.html)
  info(`${INFOS.priceIsOverExpectation} ${INFOS.emailHasBeenSent}`)
}

const checkPrice = async () => {
  cryptoConfig.forEach(async ({ cryptocurrencyName, alertPrice }) => {
    const price = await crypto.getCryptoCurrencyPrice(cryptocurrencyName)

    if (price < alertPrice.under)
      priceIsUnderExpectation(cryptocurrencyName, alertPrice)
    else if (price > alertPrice.over)
      priceIsOverExpectation(cryptocurrencyName, alertPrice)
    else info(INFOS.priceChecked)
  })
}

export const app = () => {
  info(INFOS.appStarted, [cryptoConfig, appConfig], true)
  createInterval(checkPrice)
}
