import axios from 'axios'

class API {
  api = axios.create({
    baseURL: process.env.API_URL_CoinMarketCap,
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.API_KEY_CoinMarketCap}`,
      Accept: 'application/json',
    },
  })
}

export default API
