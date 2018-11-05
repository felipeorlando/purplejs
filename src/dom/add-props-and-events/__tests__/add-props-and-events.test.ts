import addPropsAndEvents from '../index'

describe('dom addPropsAndEvents', () => {
  context('when receive null properties', () => {
    it('should have a dom element with children empty', () => {
      const element = { type: 'div', props: null, children: null }
      const dom = document.createElement(element.type)
      
      const modifiedDOM = addPropsAndEvents(element, dom)

      expect(modifiedDOM).toEqual(dom)
    })
  })

  context('when receive properties', () => {
    it('should have a dom element with properly children', () => {
      const props = { className: 'purple' }
      const element = { type: 'div', props, children: null }
      const dom = document.createElement(element.type)

      const modifiedDOM = addPropsAndEvents(element, dom)
    
      expect(modifiedDOM.className).toEqual(props.className)
    })
  })

  context('when receive events', () => {
    it('should not add as a prop', () => {
      const props = { onChange: () => {} }
      const element = { type: 'div', props, children: null }
      const dom = document.createElement(element.type)
    
      const modifiedDOM = addPropsAndEvents(element, dom)

      expect(modifiedDOM.onchange).toBeNull()
    })
  })
})
