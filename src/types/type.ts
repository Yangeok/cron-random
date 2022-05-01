import { DayRange, HourRange, MinuteRange, MonthRange, WeekdayRange } from './base'
import { IDayRange, IHourRange, IMinuteRange, IMonthRange, IRuleTypes, IWeekdayRange } from './interface'

export type Time = keyof IRuleTypes

export type IntersectionRangeArray = IMinuteRange & IHourRange & IDayRange & IMonthRange & IWeekdayRange

export type UnionRange = MinuteRange | HourRange | DayRange | MonthRange | WeekdayRange
