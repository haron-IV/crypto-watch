import 'dotenv/config'
import { API } from './src/services/CoinMarketCap'

const api = new API()

const test = () => {
  const tt = async () => {
    console.log(await api.testCall())
  }

  tt()
}

test()
