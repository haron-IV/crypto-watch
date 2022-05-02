import { ImageListValue } from '@shared/types'
import { SupportedCryptocurrencies } from '@shared/enums'

const imgSource = (imageName: string) =>
  `${__dirname}/cryptocurrencyIcons/${imageName}`

export const imageList = {
  [SupportedCryptocurrencies.Bitcoin]: {
    filename: 'bitcoin.png',
    path: imgSource('bitcoin.png'),
    cid: 'icon-bitcoin',
  },
  [SupportedCryptocurrencies.Ethereum]: {
    filename: 'ethereum.png',
    path: imgSource('ethereum.png'),
    cid: 'icon-ethereum',
  },
  [SupportedCryptocurrencies.Tether]: {
    filename: 'tether.png',
    path: imgSource('tether.png'),
    cid: 'icon-tether',
  },
  [SupportedCryptocurrencies.BNB]: {
    filename: 'bnb.png',
    path: imgSource('bnb.png'),
    cid: 'icon-bnb',
  },
  [SupportedCryptocurrencies.USDCoin]: {
    filename: 'usd-coin.png',
    path: imgSource('usd-coin.png'),
    cid: 'icon-usd-coin',
  },
  [SupportedCryptocurrencies.Solana]: {
    filename: 'solana.png',
    path: imgSource('solana.png'),
    cid: 'icon-solana',
  },
  [SupportedCryptocurrencies.XRP]: {
    filename: 'xrp.png',
    path: imgSource('xrp.png'),
    cid: 'icon-xrp',
  },
  [SupportedCryptocurrencies.Terra]: {
    filename: 'terra.png',
    path: imgSource('terra.png'),
    cid: 'icon-terra',
  },
  [SupportedCryptocurrencies.Cardano]: {
    filename: 'cardano.png',
    path: imgSource('cardano.png'),
    cid: 'icon-cardano',
  },
  [SupportedCryptocurrencies.Dogecoin]: {
    filename: 'dogecoin.png',
    path: imgSource('dogecoin.png'),
    cid: 'icon-dogecoin',
  },
  [SupportedCryptocurrencies.Avalanche]: {
    filename: 'avalanche.png',
    path: imgSource('avalanche.png'),
    cid: 'icon-avalanche',
  },
  [SupportedCryptocurrencies.TerraUSD]: {
    filename: 'terrausd.png',
    path: imgSource('terrausd.png'),
    cid: 'icon-terrausd',
  },
  [SupportedCryptocurrencies.Polkadot]: {
    filename: 'polkadot.png',
    path: imgSource('polkadot.png'),
    cid: 'icon-polkadot',
  },
  [SupportedCryptocurrencies.BinanceUSD]: {
    filename: 'binanceUsd.png',
    path: imgSource('binanceUsd.png'),
    cid: 'icon-binanceUsd',
  },
  [SupportedCryptocurrencies.ShibaInu]: {
    filename: 'shibainu.png',
    path: imgSource('shibainu.png'),
    cid: 'icon-shibainu',
  },
  [SupportedCryptocurrencies.WrappedBitcoin]: {
    filename: 'wrapped-bitcoin.png',
    path: imgSource('wrapped-bitcoin.png'),
    cid: 'icon-wrapped-bitcoin',
  },
  [SupportedCryptocurrencies.Polygon]: {
    filename: 'polygon.png',
    path: imgSource('polygon.png'),
    cid: 'icon-polygon',
  },
  [SupportedCryptocurrencies.Litecoin]: {
    filename: 'litecoin.png',
    path: imgSource('litecoin.png'),
    cid: 'icon-litecoin',
  },
  [SupportedCryptocurrencies.Cosmos]: {
    filename: 'cosmos.png',
    path: imgSource('cosmos.png'),
    cid: 'icon-cosmos',
  },
  [SupportedCryptocurrencies.Chainlink]: {
    filename: 'chainlink.png',
    path: imgSource('chainlink.png'),
    cid: 'icon-chainlink',
  },
  [SupportedCryptocurrencies.Uniswap]: {
    filename: 'uniswap.png',
    path: imgSource('uniswap.png'),
    cid: 'icon-uniswap',
  },
  [SupportedCryptocurrencies.BitcoinCash]: {
    filename: 'bitcoin-cash.png',
    path: imgSource('bitcoin-cash.png'),
    cid: 'icon-bitcoin-cash',
  },
  [SupportedCryptocurrencies.ApeCoin]: {
    filename: 'ape-coin.png',
    path: imgSource('ape-coin.png'),
    cid: 'icon-ape-coin',
  },
  [SupportedCryptocurrencies.Stellar]: {
    filename: 'stellar.png',
    path: imgSource('stellar.png'),
    cid: 'icon-stellar',
  },
  [SupportedCryptocurrencies.Monero]: {
    filename: 'monero.png',
    path: imgSource('monero.png'),
    cid: 'icon-monero',
  },
  [SupportedCryptocurrencies.EthereumClassic]: {
    filename: 'ethereum-classic.png',
    path: imgSource('ethereum-classic.png'),
    cid: 'icon-ethereum-classic',
  },
  [SupportedCryptocurrencies.Filecoin]: {
    filename: 'filecoin.png',
    path: imgSource('filecoin.png'),
    cid: 'icon-filecoin',
  },
  [SupportedCryptocurrencies.ThetaNetwork]: {
    filename: 'theta-network.png',
    path: imgSource('theta-network.png'),
    cid: 'icon-theta-network',
  },
  [SupportedCryptocurrencies.TheGraph]: {
    filename: 'the-graph.png',
    path: imgSource('the-graph.png'),
    cid: 'icon-the-graph',
  },
  [SupportedCryptocurrencies.BitcoinSV]: {
    filename: 'bitcoin-sv.png',
    path: imgSource('bitcoin-sv.png'),
    cid: 'icon-bitcoin-sv',
  },
  [SupportedCryptocurrencies.Amp]: {
    filename: 'amp.png',
    path: imgSource('amp.png'),
    cid: 'icon-amp',
  },
}

export type IconsImageList = typeof imageList
export type ImageListAttachments = IconsImageList[keyof IconsImageList][]
export const mapToAttachments = (
  imageList: IconsImageList
): ImageListAttachments => Object.values(imageList)
export const getIcon = (cryptocurrencyName: SupportedCryptocurrencies) =>
  imageList[cryptocurrencyName] as ImageListValue
