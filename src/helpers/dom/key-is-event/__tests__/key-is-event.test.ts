import keyIsEvent from '../index'

describe('dom keyIsEvent', () => {
  context('when prop key begins with on', () => {
    it('should return true', () => {
      const key = 'onChange'
      const result = keyIsEvent(key)
      expect(result).toBeTruthy()
    })
  })

  context('when prop key do not begins with on', () => {
    it('should return false', () => {
      const key = 'className'
      const result = keyIsEvent(key)
      expect(result).toBeFalsy()
    })
  })
})
