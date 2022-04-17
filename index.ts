import 'dotenv/config'
import { CoinMarketCap } from './src/services'

const cryptocurrency = new CoinMarketCap.Cryptocurrency()

const app = () => {
  const tt = async () => {
    const info = await await cryptocurrency.getCryptoCurrencyPrice('bitcoin')
    console.log(info)
  }

  tt()
}

app()
