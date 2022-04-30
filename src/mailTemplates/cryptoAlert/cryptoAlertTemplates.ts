import { strings } from '@mailTemplates/strings'
import { CryptoAlertTemplateProps } from '@shared/types'
import { cryptoAlertTemplateBase } from './cryptoAlertTemplateBase'

const templateBaseProps = {
  subTitle: strings.cryptoAlert.subtitle,
  subTitleText: strings.cryptoAlert.subTitleText,
  footerText: strings.cryptoAlert.footerText,
  projectLink: strings.cryptoAlert.projectLink,
  projectLinkText: strings.cryptoAlert.projectLinkText,
  siteLink: strings.cryptoAlert.siteLink,
  siteLinkText: strings.cryptoAlert.siteLinkText,
}

export const priceIsOver = (templateProps: CryptoAlertTemplateProps) => {
  const { html, attachments } = cryptoAlertTemplateBase({
    title: strings.cryptoAlert.priceIsOverSubject(templateProps),
    cryptocurrencyName: templateProps.cryptocurrencyName,
    price: templateProps.cryptocurrencyPrice,
    ...templateBaseProps,
  })

  return {
    subject: strings.cryptoAlert.priceIsOverSubject(templateProps),
    text: strings.cryptoAlert.priceIsOverSubject(templateProps),
    attachments,
    html,
  }
}

export const priceIsUnder = (templateProps: CryptoAlertTemplateProps) => {
  const { html, attachments } = cryptoAlertTemplateBase({
    title: strings.cryptoAlert.priceIsUnderSubject(templateProps),
    cryptocurrencyName: templateProps.cryptocurrencyName,
    price: templateProps.cryptocurrencyPrice,
    ...templateBaseProps,
  })

  return {
    subject: strings.cryptoAlert.priceIsUnderSubject(templateProps),
    text: strings.cryptoAlert.priceIsUnderSubject(templateProps),
    attachments,
    html,
  }
}
