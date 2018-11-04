import ifElse from '../if-else'

describe('ifElse', () => {
  const ifCase = 'Assert IF condition'
  const elseCase = 'Assert ELSE condition'

  context('when condition passes', () => {
    it('should return the first function', () => {
      const result = ifElse(
        true,
        ifCase,
        elseCase,
      )
      expect(result).toEqual(ifCase)
    })
  })

  context('when condition do not passes', () => {
    it('should return the second function', () => {
      const result = ifElse(
        false,
        ifCase,
        elseCase,
      )
      expect(result).toEqual(elseCase)
    })
  })
});
