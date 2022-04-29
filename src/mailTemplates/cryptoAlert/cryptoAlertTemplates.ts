import { strings } from '@mailTemplates/strings'
import { CryptoAlertTemplateProps } from '@shared/types'
import { cryptoAlertTemplateBase } from './cryptoAlertTemplateBase'

export const priceIsOver = (templateProps: CryptoAlertTemplateProps) => {
  const { html, attachments } = cryptoAlertTemplateBase()

  return {
    subject: strings.cryptoAlert.priceIsOverSubject(templateProps),
    text: strings.cryptoAlert.priceIsOverSubject(templateProps),
    attachments,
    html,
  }
}

export const priceIsUnder = (templateProps: CryptoAlertTemplateProps) => {
  const { html, attachments } = cryptoAlertTemplateBase()

  return {
    subject: strings.cryptoAlert.priceIsUnderSubject(templateProps),
    text: strings.cryptoAlert.priceIsUnderSubject(templateProps),
    attachments,
    html,
  }
}
