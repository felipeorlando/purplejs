import isElementDOM from '../is-element-dom'
import Component from '../../component/index'

describe('instantiate isElementDOM', () => {
  context('when receive a string as element.type', () => {
    it('should return true', () => {
      const element = { type: 'div', props: null }
      
      expect(isElementDOM(element)).toBeTruthy()
    })
  })
  
  context('when receive a class component as element.type', () => {
    it('should return false', () => {
      class Button extends Component {}
      const element = { type: Button, props: null }
  
      expect(isElementDOM(element)).toBeFalsy()
    })
  })
})
