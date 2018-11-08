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

      const clonedDOM = addPropsAndEvents(element, dom)
      const clonedDOMWithoutProps = removePropsAndEvents(dom, props)

      const modifiedNullableDom = addPropsAndEvents(nullableElement, nullableDom)
    
      expect(clonedDOMWithoutProps).toEqual(modifiedNullableDom)
    })
  })
})
