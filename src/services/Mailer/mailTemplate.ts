import { SupportedCryptocurrencies } from 'app'

type TemplateFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  priceException: number,
  convertedTo: string
) => { subject: string; html: string }

const priceIsOver: TemplateFn = (
  cryptocurrencyName,
  priceException,
  convertedTo
) => ({
  subject: `Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} ${convertedTo}!`,
  html: `
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} USD!</h2>
      </header>
    </article>
  `,
})

const priceIsUnder: TemplateFn = (
  cryptocurrencyName,
  priceException,
  convertedTo
) => ({
  subject: `Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} ${convertedTo}!`,
  html: `
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} USD!</h2>
      </header>
    </article>
  `,
})

export { priceIsOver, priceIsUnder }
