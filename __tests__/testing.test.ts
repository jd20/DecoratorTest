import { testing } from '../testing'

class Test {
  @testing prop: number = 'hello world'
}

it('tests decorators', () => {
  const t = new Test()
  expect(t.prop).toEqual('hello world')
})