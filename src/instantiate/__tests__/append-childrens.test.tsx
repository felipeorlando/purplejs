import createElement from '../../dom/create-element/index'
import appendChildrens from '../append-childrens'

describe('instantiate appendChildrens', () => {
  context('when has children', () => {
    const parentDOM = document.createElement('div')
    const children = [
      { type: 'span', props: null, children: null }
    ]

    const childrenInstance = appendChildrens(parentDOM, children)

    it('should append children do parent DOM', () => {
      expect(parentDOM.childNodes[0].nodeName).toEqual('SPAN')
    })

    it('should return children instantiate', () => {
      const child = childrenInstance[0]

      expect(child.dom.nodeName).toEqual('SPAN')
      expect(child.element).toEqual(children[0])
      expect(child.childInstances).toEqual([])
    })
  })

  context('when has no children', () => {
    const parentDOM = document.createElement('div')
    const children = []

    const childrenInstance = appendChildrens(parentDOM, children)

    it('should return children instantiate as array empty', () => {
      expect(childrenInstance).toEqual([])
    })
  })
})
