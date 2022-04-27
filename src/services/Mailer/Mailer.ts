import { ReadStream } from 'fs'
import { createTransport, SentMessageInfo, Transporter } from 'nodemailer'
import { Options } from 'nodemailer/lib/mailer'

const user = process.env.MAILER_USER || ''
const pass = process.env.MAILER_PASSWORD || ''
const mailTarget = process.env.MAILER_TARGET || ''

type TransporterObj = Transporter<SentMessageInfo>
class Mailer {
  private transporter: TransporterObj = createTransport({
    service: 'Gmail',
    auth: {
      user,
      pass,
    },
  })

  sendMail = (html: string | ReadStream, subject: string) => {
    const mail: Options = {
      to: mailTarget,
      html,
      from: user,
      subject,
    }

    this.transporter.sendMail(mail, (err) => {
      if (err) console.error(err.message)
      else console.log(`Mail has been sent to: ${mail.to}`)
    })
  }
}

export default Mailer
