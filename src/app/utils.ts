import { IntervalValueType } from '../../config'

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
