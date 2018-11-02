import addPropsAndEvents from '../../add-props-and-events/index'
import removePropsAndEvents from '../index'

describe('dom removePropsAndEvents', () => {
  context('when receive properties', () => {
    it('should have a dom element with children empty', () => {
      const props = { className: 'purple', id: 'unique' }
      const node = { type: 'div', props, children: null }
      const element = document.createElement(node.type)
      
      const nullProps = { className: null, id: null }
      const nullableNode = { type: 'div', props: nullProps, children: null }
      const nullableElement = document.createElement(nullableNode.type)

    
      addPropsAndEvents(node, element)
      removePropsAndEvents(node, element)

      addPropsAndEvents(nullableNode, nullableElement)
    
      expect(element).toEqual(nullableElement)
    })
  })
})
