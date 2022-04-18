import API from './Api'
import { GetCryptoCurrencyInfoResponse } from './types'

class Cryptocurrency extends API {
  private getCryptoCurrencyInfo = async (coinName: string) => {
    const { data } = await this.api.get<GetCryptoCurrencyInfoResponse>(
      '/cryptocurrency/quotes/latest',
      { params: { slug: coinName } }
    )

    return data
  }

  getCryptoCurrencyPrice = async (coinName: string) =>
    (await this.getCryptoCurrencyInfo(coinName)).data[1].quote.USD.price
}

export default Cryptocurrency
