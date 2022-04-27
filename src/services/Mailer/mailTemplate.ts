import { SupportedCryptocurrencies } from 'app'
import { createReadStream, ReadStream } from 'fs'
import { template } from './templates/template'

type TemplateFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  priceException: number,
  convertedTo: string
) => { subject: string; html: ReadStream }

/*
`
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} USD!</h2>
      </header>
    </article>
  `,
*/
const priceIsOver: TemplateFn = (
  cryptocurrencyName,
  priceException,
  convertedTo
) => {
  const html = createReadStream(
    `${__dirname.replace('/app', '')}/templates/template.html`
  )

  return {
    subject: `Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} ${convertedTo}!`,
    text: '',
    html,
  }
}

/*
`
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} USD!</h2>
      </header>
    </article>
  `,
*/
const priceIsUnder: TemplateFn = (
  cryptocurrencyName,
  priceException,
  convertedTo
) => {
  const html = createReadStream(
    `${__dirname.replace('/app', '')}/templates/template.html`
  )
  return {
    subject: `Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} ${convertedTo}!`,
    text: '',
    html,
  }
}

export { priceIsOver, priceIsUnder }
