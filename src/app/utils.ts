import { config, IntervalValueType } from 'config'

const { appConfig } = config

export const convertTime = (time: number, timeType: IntervalValueType) => {
  switch (timeType) {
    case IntervalValueType.minutes:
      return time * 60 * 1000

    case IntervalValueType.hours:
      return time * 60 * 60 * 1000

    case IntervalValueType.days:
      return time * 24 * 60 * 60 * 1000

    default:
      return 3 * 60 * 60 * 1000
  }
}

export const createInterval = (task: () => void) => {
  const intervalTime = appConfig.checkInterval
  const intervalType = appConfig.intervalValueType
  task()
  const interval = setInterval(task, convertTime(intervalTime, intervalType))

  return interval
}

export const getDateTime = () => {
  // TODO: remove this cus it is not used
  const d = new Date()

  return `${d.toDateString()} | ${d.toTimeString().split(' ')[0]}`
}
