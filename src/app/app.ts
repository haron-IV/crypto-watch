import {
  CoinMarketCap,
  Mailer,
  Log,
  priceIsOver,
  priceIsUnder,
  Database,
} from '@services'
import { ERRORS, INFOS } from '@shared/strings'
import { config } from 'config'
import { createReadStream } from 'fs'
import { SupportedCryptocurrencies } from './types'
import { createInterval } from './utils'

const { cryptoConfig, appConfig } = config
const crypto = new CoinMarketCap.Cryptocurrency()
const mailer = new Mailer()
const { info, error } = new Log()
const { init } = new Database()
init()

type AlertPrice = { under: number; over: number }
type PriceCheckFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  alertPrice: AlertPrice,
  convertedTo: string
) => void

const priceIsUnderExpectation: PriceCheckFn = (
  cryptocurrencyName,
  alertPrice,
  convertedTo
) => {
  const mail = priceIsUnder(cryptocurrencyName, alertPrice.under, convertedTo)
  mailer.sendMail(mail.html, mail.subject)
  info(
    `${INFOS.priceIsUnderExpectation(cryptocurrencyName)} ${
      INFOS.emailHasBeenSent
    }`
  )
}

const priceIsOverExpectation: PriceCheckFn = (
  cryptocurrencyName,
  alertPrice,
  convertedTo
) => {
  const mail = priceIsOver(cryptocurrencyName, alertPrice.over, convertedTo)
  mailer.sendMail(mail.html, mail.subject)
  info(
    `${INFOS.priceIsOverExpectation(cryptocurrencyName)} ${
      INFOS.emailHasBeenSent
    }`
  )
}

const checkPrices = async () => {
  const cryptocurrenciesToCheck = cryptoConfig
    .map(({ cryptocurrencyName, active }) =>
      active ? cryptocurrencyName : null
    )
    .filter(Boolean) as SupportedCryptocurrencies[]

  const prices = await crypto.getCryptoCurrenciesPrice(cryptocurrenciesToCheck)
  const pricesWithAlertInfo = prices.map((item) => ({
    ...item,
    alertPrice: cryptoConfig.find(
      (cfg) => cfg.cryptocurrencyName === item.name.toLowerCase()
    )?.alertPrice,
  }))

  pricesWithAlertInfo.forEach(({ name, price, convertedTo, alertPrice }) => {
    if (!alertPrice) {
      error(ERRORS.noAlertPrice)
      return
    }
    const cryptocurrencyName = name as SupportedCryptocurrencies

    if (price < alertPrice?.under)
      priceIsUnderExpectation(cryptocurrencyName, alertPrice, convertedTo)
    else if (price > alertPrice?.over)
      priceIsOverExpectation(cryptocurrencyName, alertPrice, convertedTo)
    else info(`${INFOS.priceChecked(cryptocurrencyName, price, convertedTo)}`)
  })
}

export const app = () => {
  info(INFOS.appStarted, [cryptoConfig, appConfig], true)
  createInterval(checkPrices)
}
