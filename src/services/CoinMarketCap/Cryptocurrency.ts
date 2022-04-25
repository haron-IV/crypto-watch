import API from './Api'
import { GetCryptoCurrencyInfoResponse } from './types'

class Cryptocurrency extends API {
  private getCryptoCurrencyInfo = async (coinNames: string[]) => {
    const slugString = coinNames.map((item) => item.toLowerCase()).join(',')
    const { data } = await this.api.get<GetCryptoCurrencyInfoResponse>(
      '/cryptocurrency/quotes/latest',
      { params: { slug: slugString } }
    )

    return data
  }

  getCryptoCurrenciesPrice = async (coinNames: string[]) => {
    const { data } = await this.getCryptoCurrencyInfo(coinNames)
    const coinsEntries = Object.entries(data)
    const prices = coinsEntries.map(([_, { name, quote }]) => ({
      name,
      price: quote.USD.price,
      convertedTo: 'USD',
    }))

    return prices
  }
}

export default Cryptocurrency
