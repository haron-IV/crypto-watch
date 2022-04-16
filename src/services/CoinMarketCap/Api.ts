import axios from 'axios'

class API {
  api = axios.create({
    baseURL: process.env.API_URL_CoinMarketCap_sandbox,
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.API_KEY_CoinMarketCap}`,
      Accept: 'application/json',
    },
  })

  testCall = async () => {
    const res = await this.api.get('v1/cryptocurrency/listings/latest')

    return res.data
  }
}

export default API
