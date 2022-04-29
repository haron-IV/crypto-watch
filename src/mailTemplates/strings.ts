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
  },
}
