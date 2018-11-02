import addChildrenToElement from '../index'

describe('dom addChildren', () => {
  context('when not receive children', () => {
    it('should have a dom element with children empty', () => {
      const dom = document.createElement('div')
      const children = []
    
      addChildrenToElement(dom, children)
    
      expect(dom.children.length).toEqual(0)
    })
  })

  context('when receive a children', () => {
    const dom = document.createElement('div')
    const children = [{ type: 'a', props: null, children: null }]

    it('should have a dom element with 1 children', () => {
      addChildrenToElement(dom, children)
    
      expect(dom.children.length).toEqual(1)
    })

    it('should have a dom element with children with nodeName A', () => {
      addChildrenToElement(dom, children)
    
      expect(dom.children[0].nodeName).toEqual("A")
    })
  })
})
