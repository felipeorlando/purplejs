import addPropsAndEvents from '../index'

describe('dom addProps', () => {
  context('when receive null properties', () => {
    it('should have a dom element with children empty', () => {
      const node = { type: 'div', props: null, children: null }
      const element = document.createElement(node.type)
      const elementToModify = document.createElement(node.type)
    
      addPropsAndEvents(node, elementToModify)
    
      expect(element).toEqual(elementToModify)
    })
  })

  context('when receive properties', () => {
    it('should have a dom element with properly children', () => {
      const props = { className: 'purple' }
      const node = { type: 'div', props, children: null }
      const element = document.createElement(node.type)
    
      addPropsAndEvents(node, element)
    
      expect(element.className).toEqual(props.className)
    })
  })

  context('when receive events', () => {
    it('should not add as a prop', () => {
      const props = { onChange: () => {} }
      const node = { type: 'div', props, children: null }
      const element = document.createElement(node.type)
    
      addPropsAndEvents(node, element)

      expect(element.onchange).toBeNull()
    })
  })
})
