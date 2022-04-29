import { cryptoAlertTemplateBase } from '@static/mailTemplates'
import { SupportedCryptocurrencies } from '@shared'
import { ReadStream } from 'fs'

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
  // TODO: it should be replaced with proper function
  const { html, attachments } = cryptoAlertTemplateBase()

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
  const { html, attachments } = cryptoAlertTemplateBase()

  return {
    subject: `Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} ${convertedTo}!`,
    text: '',
    attachments,
    html,
  }
}

export { priceIsOver, priceIsUnder }
