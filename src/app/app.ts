import {
  priceIsOver,
  priceIsUnder,
} from '@mailTemplates/cryptoAlert/cryptoAlertTemplates'
import { CoinMarketCap, Mailer, Logger, Database } from '@services'
import { SupportedCryptocurrencies } from '@shared/enums'
import { ERRORS, INFOS } from '@shared/strings'
import { config } from 'config'
import { createInterval } from './utils'

// TODO: refactorize this file
const { cryptoConfig, appConfig } = config
const crypto = new CoinMarketCap.Cryptocurrency()
const mailer = new Mailer()
const { info, error } = new Logger()
const { init } = new Database()
init()

type AlertPrice = { under: number; over: number }
type PriceCheckFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  alertPrice: AlertPrice,
  convertedTo: string,
  cryptocurrencyPrice: number
) => void

const priceIsUnderExpectation: PriceCheckFn = (
  cryptocurrencyName,
  alertPrice,
  convertedTo,
  cryptocurrencyPrice
) => {
  const mail = priceIsUnder({
    cryptocurrencyName,
    priceException: alertPrice.under,
    convertedTo,
    cryptocurrencyPrice,
  })
  mailer.sendMail(mail.html, mail.subject, mail.attachments)
  info(
    `${INFOS.priceIsUnderExpectation(cryptocurrencyName)} ${
      INFOS.emailHasBeenSent
    }`
  )
}

const priceIsOverExpectation: PriceCheckFn = (
  cryptocurrencyName,
  alertPrice,
  convertedTo,
  cryptocurrencyPrice
) => {
  const mail = priceIsOver({
    cryptocurrencyName,
    priceException: alertPrice.over,
    convertedTo,
    cryptocurrencyPrice,
  })
  mailer.sendMail(mail.html, mail.subject, mail.attachments)
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
  const pricesWithAlertInfo = prices.map(item => ({
    ...item,
    alertPrice: cryptoConfig.find(
      cfg => cfg.cryptocurrencyName === item.name.toLowerCase()
    )?.alertPrice,
  }))

  pricesWithAlertInfo.forEach(({ name, price, convertedTo, alertPrice }) => {
    if (!alertPrice) {
      error(ERRORS.noAlertPrice)
      return
    }
    const cryptocurrencyName =
      name.toLocaleLowerCase() as SupportedCryptocurrencies

    if (price < alertPrice?.under)
      priceIsUnderExpectation(
        cryptocurrencyName,
        alertPrice,
        convertedTo,
        price
      )
    else if (price > alertPrice?.over)
      priceIsOverExpectation(cryptocurrencyName, alertPrice, convertedTo, price)
    else info(`${INFOS.priceChecked(cryptocurrencyName, price, convertedTo)}`)
  })
}

export const app = () => {
  info(INFOS.appStarted, [cryptoConfig, appConfig], true)
  createInterval(checkPrices)
}
