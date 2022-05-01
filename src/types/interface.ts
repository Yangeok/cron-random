import { DayRange, HourRange, MinuteRange, MonthRange, WeekdayRange } from './base'

interface IRange {
  range: number[]
  isFixed: boolean
}

export interface IMinuteRange extends IRange {
  range: MinuteRange[]
}

export interface IHourRange extends IRange {
  range: HourRange[]
}

export interface IDayRange extends IRange {
  range: DayRange[]
}

export interface IMonthRange extends IRange {
  range: MonthRange[]
}

export interface IWeekdayRange extends IRange {
  range: WeekdayRange[]
}

export interface IRuleTypes {
  minute: IMinuteRange
  hour: IHourRange
  day: IDayRange
  month: IMonthRange
  weekday: IWeekdayRange
}
