import { Range } from './util'

export type MinuteRange = Range<0, 60>
export type HourRange = Range<0, 24>
export type DayRange = Range<1, 32>
export type MonthRange = Range<1, 13>
export type WeekdayRange = Range<0, 7>
