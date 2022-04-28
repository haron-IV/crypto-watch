import { SupportedCryptocurrencies } from 'app'
import { ReadStream } from 'fs'
import { template } from '@root/static/mailTemplates/cryptoAlert/template'

type TemplateFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  priceException: number,
  convertedTo: string
) => {
  subject: string
  html: ReadStream | string
  attachments: any[]
}

const priceIsOver: TemplateFn = (
  cryptocurrencyName,
  priceException,
  convertedTo
) => {
  const { html, attachments } = template()

  return {
    subject: `Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} ${convertedTo}!`,
    text: '',
    attachments,
    html,
  }
}

const priceIsUnder: TemplateFn = (
  cryptocurrencyName,
  priceException,
  convertedTo
) => {
  const { html, attachments } = template()

  return {
    subject: `Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} ${convertedTo}!`,
    text: '',
    attachments,
    html,
  }
}

export { priceIsOver, priceIsUnder }
