import { CryptoAlertTemplateProps } from '@shared/types'

export const strings = {
  cryptoAlert: {
    priceIsOverSubject: ({
      cryptocurrencyName,
      priceException,
      convertedTo,
    }: CryptoAlertTemplateProps) =>
      `Price of ${cryptocurrencyName.toUpperCase()} is over ${priceException} ${convertedTo}!`,
    priceIsUnderSubject: ({
      cryptocurrencyName,
      priceException,
      convertedTo,
    }: CryptoAlertTemplateProps) =>
      `Price of ${cryptocurrencyName.toUpperCase()} is under ${priceException} ${convertedTo}!`,
    subtitle:
      "Price changed, don't wait to take your decision and take the profit",
    subTitleText:
      'Go to your Cryptocurrency exchange, and realize your profit. If our app helped you to earn, give us feedback.',
    projectLink: 'https://github.com/haron-IV/crypto-watch',
    projectLinkText: 'Project',
    footerText: '',
    siteLink: 'https://github.com/haron-IV/crypto-watch', // TODO: change it when frontend will be done
    siteLinkText: 'Site',
  },
}
