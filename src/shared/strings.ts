export const ERRORS = {
  noAlertPrice: 'No alert price specified for this cryptocurrency.',
}
export const INFOS = {
  appStarted: 'App has been started with config.',
  priceChecked: (cryptocurrencyName: string, price: number, currency: string) =>
    `${cryptocurrencyName} price checked. Price: ${price} ${currency}`,
  emailHasBeenSent: 'Email has been sent.',
  priceIsOverExpectation: (cryptocurrencyName: string) =>
    `${cryptocurrencyName} price is over expectation.`,
  priceIsUnderExpectation: (cryptocurrencyName: string) =>
    `${cryptocurrencyName} price is under expectation.`,
  dbInitialized: 'Database initialized',
}
