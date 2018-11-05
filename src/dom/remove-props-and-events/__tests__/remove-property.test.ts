import removeProperty from '../remove-property'
import addProperty from '../../add-props-and-events/add-property'

describe('dom removeProperty', () => {
  it('should have a dom element with properly children', () => {
    const props = { className: 'purple' }
    const element = { type: 'div', props, children: null }
    const dom = document.createElement(element.type)

    addProperty(element, dom, 'className')
    removeProperty(dom, 'className')
      
    expect(dom.className).toEqual('null')
  })
})
