import { IntersectionRangeArray, IRuleTypes, Time, UnionRange } from './types'

export class RandomCron {
  #ruleTypes: IRuleTypes = {
    minute: { range: [0, 59], isFixed: false },
    hour: { range: [0, 23], isFixed: false },
    day: { range: [1, 31], isFixed: false },
    month: { range: [1, 12], isFixed: false },
    weekday: { range: [0, 6], isFixed: false },
  }
  #rules: Partial<IRuleTypes> = {}
  #lastRule: Time

  some(time: Time) {
    this.#lastRule = time
    this.#rules[this.#lastRule] = {
      range: (<IntersectionRangeArray>this.#ruleTypes[time]).range,
      isFixed: false,
    }

    return this
  }

  glue() {
    this.#rules[this.#lastRule].isFixed = true

    return this
  }

  between(start: UnionRange, end: UnionRange) {
    if (this.#lastRule) {
      this.#rules[this.#lastRule].range = [start, end]
    }

    return this
  }

  generate() {
    if (Object.keys(this.#rules).length < 1) {
      this.#rules = {
        minute: { range: [0, 59], isFixed: false },
        hour: { range: [0, 23], isFixed: false },
        day: { range: [1, 31], isFixed: false },
        month: { range: [1, 12], isFixed: false },
      }
    }

    const crontab: string[] = []
    const typeNames = Object.keys(this.#ruleTypes) as Time[]
    typeNames.map((typeName) => {
      const rule = this.#rules[typeName]

      if (rule && !rule.isFixed) {
        crontab.push(Math.round(Math.random() * (rule.range[1] - rule.range[0]) + rule.range[0]).toString())
      }

      if (rule && rule.isFixed) {
        crontab.push(`${rule.range[0]}-${rule.range[1]}`)
      }

      if (!rule) {
        crontab.push('*')
      }
    })

    this.#rules = {}
    this.#lastRule = undefined

    return crontab.join(' ')
  }
}
