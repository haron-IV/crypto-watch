import { createLogger, format, transports } from 'winston'

type Log = (msg: string, data?: any, separator?: boolean) => void
enum LogType {
  Debug = 'debug',
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
}

const customFormat = format.printf(
  ({ level, message, timestamp }) => `${timestamp} | ${level}: ${message}`
)

class Logger {
  private logger = createLogger({
    transports: [
      new transports.File({
        level: 'debug',
        maxsize: 5120000,
        maxFiles: 20,
        filename: 'logs/logs.log',
        format: format.combine(
          format.timestamp({ format: 'YYY-MM-DD ( HH:mm:ss )' })
        ),
      }),
      new transports.Console({
        level: 'debug',
        format: format.combine(
          format.colorize(),
          format.timestamp({
            format: 'YYYY-MM-DD ( HH:mm:ss )',
          }),
          customFormat
        ),
      }),
    ],
  })

  separator = () =>
    console.log(`${Array(process.stdout.columns).fill('-').join('')}`)

  private log = (
    msg: string,
    data: any,
    logType: LogType,
    separator = false
  ) => {
    if (data) {
      this.logger[logType](msg)
      if (Array.isArray(data)) data.forEach((item) => console.log(item))
      else console.log(data)
    } else this.logger[logType](msg)
    if (separator) this.separator()
  }

  debug: Log = (msg, data, separator) =>
    this.log(msg, data, LogType.Debug, separator)

  error = (err: string | Error | object) => this.logger.error(err)

  warn: Log = (msg, rest, separator) =>
    this.log(msg, rest, LogType.Warn, separator)

  info: Log = (msg, rest, separator) =>
    this.log(msg, rest, LogType.Info, separator)
}

export default Logger
