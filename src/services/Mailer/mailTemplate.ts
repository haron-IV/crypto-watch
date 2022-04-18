import { SupportedCryptocurrencies } from 'app'

type TemplateFn = (
  cryptocurrencyName: SupportedCryptocurrencies,
  priceException: number
) => { subject: string; html: string }

const priceIsOver: TemplateFn = (cryptocurrencyName, priceException) => ({
  subject: `Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} USD!`,
  html: `
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} USD!</h2>
      </header>
    </article>
  `,
})

const priceIsUnder: TemplateFn = (cryptocurrencyName, priceException) => ({
  subject: `Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} USD!`,
  html: `
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} USD!</h2>
      </header>
    </article>
  `,
})

export { priceIsOver, priceIsUnder }
