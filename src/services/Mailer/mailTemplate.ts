import { SupportedCryptocurrencies } from '../../app/types'

const priceIsOver = (
  cryptocurrencyName: SupportedCryptocurrencies,
  priceException: number
) => ({
  subject: `Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} USD!`,
  html: `
    <article>
      <header>
        <h2>Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} USD!</h2>
      </header>
    </article>
  `,
})

const priceIsUnder = (
  cryptocurrencyName: SupportedCryptocurrencies,
  priceException: number
) => ({
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
