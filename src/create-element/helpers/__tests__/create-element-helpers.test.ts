import {
  hasArguments,
  propNotFalsy,
  validateArguments,
} from '../index'

describe('create-element helpers', () => {
  describe('hasArguments', () => {
    context('when array is empty', () => {
      it('should return false', () => {
        const result = hasArguments([])
        expect(result).toBeFalsy()
      })
    })
  
    context('when array has values', () => {
      it('should return true', () => {
        const list = [1, 2, 3]
        const result = hasArguments(list)
        expect(result).toBeTruthy()
      })
    })
  })

  describe('propNotFalsy', () => {
    context('when prop is null', () => {
      it('should return false', () => {
        const result = propNotFalsy(null)
        expect(result).toBeFalsy()
      })
    })

    context('when prop is false', () => {
      it('should return false', () => {
        const result = propNotFalsy(false)
        expect(result).toBeFalsy()
      })
    })

    context('when prop is true', () => {
      it('should return true', () => {
        const result = propNotFalsy(true)
        expect(result).toBeTruthy()
      })
    })

    context('when prop is an object', () => {
      it('should return true', () => {
        const result = propNotFalsy({})
        expect(result).toBeTruthy()
      })
    })
  })

  describe('validateArguments', () => {
    context('when list has null or false values', () => {
      it('should returns without nulls and falses', () => {
        const result = validateArguments([1, 2, null, 3, false])
        expect(result).toEqual([1, 2, 3])
      })
    });
  })
})
