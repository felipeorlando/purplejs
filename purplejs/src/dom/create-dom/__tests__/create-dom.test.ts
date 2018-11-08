import HTMLElement from '../../../interfaces/html-element'
import createDOM from '../index'

describe('dom createDOM', () => {
  context('when element is string', () => {
    it('should return a text node', () => {
      const dom = createDOM('purple')

      expect(dom.nodeName).toEqual('#text')
      expect(dom.nodeValue).toEqual('purple')
    })
  })

  context('when element is object ', () => {
    it('should return a div node', () => {
      const element = { type: 'div', props: null }
      const dom = createDOM(element)
      
      expect(dom.nodeName).toEqual('DIV')
    })

    it('should return a div node with props', () => {
      const props = { className: 'purple' }
      const element = { type: 'div', props }
      const dom: HTMLElement = createDOM(element)
      
      expect(dom.className).toEqual('purple')
    })
  })
})
