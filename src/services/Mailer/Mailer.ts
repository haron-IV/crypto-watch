import * as nodemailer from 'nodemailer'
import { Options } from 'nodemailer/lib/mailer'

const user = process.env.MAILER_USER || ''
const pass = process.env.MAILER_PASSWORD || ''
const mailTarget = process.env.MAILER_TARGET || ''

class Mailer {
  private transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user,
      pass,
    },
  } as nodemailer.TransportOptions)

  sendMail = (text: string, subject: string) => {
    const mail: Options = {
      to: mailTarget,
      text,
      from: user,
      subject,
    }

    this.transporter.sendMail(mail, (err, info) => {
      if (err) console.error(err.message)
      else console.log(`Mail have been sent to: ${mail.to}`)
    })
  }
}

export default Mailer
