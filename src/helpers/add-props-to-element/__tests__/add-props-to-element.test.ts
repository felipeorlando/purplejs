import addPropsToElement from '../index'

describe('addPropsToElement', () => {
  context('when receive null properties', () => {
    it('should have a dom element with children empty', () => {
      const node = { type: 'div', props: null, children: null }
      const element = document.createElement(node.type)
      const elementToModify = document.createElement(node.type)
    
      addPropsToElement(node, elementToModify)
    
      expect(element).toEqual(elementToModify)
    })
  })

  context('when receive properties', () => {
    it('should have a dom element with properly children', () => {
      const props = { className: 'purple' }
      const node = { type: 'div', props, children: null }
      const element = document.createElement(node.type)
    
      addPropsToElement(node, element)
    
      expect(element.className).toEqual(props.className)
    })
  })
})
