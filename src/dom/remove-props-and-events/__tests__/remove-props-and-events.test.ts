import addPropsAndEvents from '../../add-props-and-events/index'
import removePropsAndEvents from '../index'

describe('dom removePropsAndEvents', () => {
  context('when receive properties', () => {
    it('should have a dom with children empty', () => {
      const props = { className: 'purple', id: 'unique' }
      const element = { type: 'div', props, children: null }
      const dom = document.createElement(element.type)
      
      const nullProps = { className: null, id: null }
      const nullableElement = { type: 'div', props: nullProps, children: null }
      const nullableDom = document.createElement(nullableElement.type)

      addPropsAndEvents(element, dom)
      removePropsAndEvents(dom, props)

      addPropsAndEvents(nullableElement, nullableDom)
    
      expect(dom).toEqual(nullableDom)
    })
  })
})
