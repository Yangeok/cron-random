import { RandomCron } from '../src'

describe('Fix cron expression length to be 5', () => {
  test('When expression is generated, its length should be 5', () => {
    const expression = new RandomCron().generate()
    expect(expression.split(' ')).toHaveLength(5)
  })

  test('When duplicate written, its length should be 5', () => {
    const expression = new RandomCron().some('minute').between(1, 60).some('minute').between(1, 60).some('minute').between(1, 60).generate()
    expect(expression.split(' ')).toHaveLength(5)
  })
})

describe('Glue cron expression range', () => {
  test('When glued weekday, it should be fixed string', () => {
    const expression = new RandomCron().some('weekday').between(1, 5).glue().generate()
    expect(expression.split(' ').at(-1)).toBe('1-5')
  })

  test('When glued month, it should be fixed string', () => {
    const expression = new RandomCron().some('month').between(1, 5).glue().generate()
    expect(expression.split(' ').at(-2)).toBe('1-5')
  })

  test('When glued day, it should be fixed string', () => {
    const expression = new RandomCron().some('day').between(1, 5).glue().generate()
    expect(expression.split(' ').at(-3)).toBe('1-5')
  })

  test('When glued hour, it should be fixed string', () => {
    const expression = new RandomCron().some('hour').between(1, 5).glue().generate()
    expect(expression.split(' ').at(-4)).toBe('1-5')
  })

  test('When glued minute, it should be fixed string', () => {
    const expression = new RandomCron().some('minute').between(1, 5).glue().generate()
    expect(expression.split(' ').at(-5)).toBe('1-5')
  })
})

describe('Specify range', () => {
  test('When range is specified, it should be greater than or equal maximum value', () => {
    const expression = new RandomCron().some('minute').between(1, 10).generate()
    expect(Number(expression.split(' ').at(0))).toBeGreaterThanOrEqual(1)
  })

  test('When range is specified, it should be greater than or equal minimum value', () => {
    const expression = new RandomCron().some('minute').between(1, 10).generate()
    expect(Number(expression.split(' ').at(0))).toBeLessThanOrEqual(10)
  })
})

describe('Specify some time', () => {
  test('When weekday is specified, it should not be asterisk', () => {
    const expression = new RandomCron().some('weekday').between(1, 5).generate()
    expect(expression.split(' ').at(-1)).not.toBe('*')
  })

  test('When month is specified, it should not be asterisk', () => {
    const expression = new RandomCron().some('month').between(1, 5).generate()
    expect(expression.split(' ').at(-2)).not.toBe('*')
  })

  test('When day is specified, it should not be asterisk', () => {
    const expression = new RandomCron().some('day').between(1, 5).generate()
    expect(expression.split(' ').at(-3)).not.toBe('*')
  })

  test('When hour is specified, it should not be asterisk', () => {
    const expression = new RandomCron().some('hour').between(1, 5).generate()
    expect(expression.split(' ').at(-4)).not.toBe('*')
  })

  test('When minute is specified, it should not be asterisk', () => {
    const expression = new RandomCron().some('minute').between(1, 5).generate()
    expect(expression.split(' ').at(-5)).not.toBe('*')
  })
})
