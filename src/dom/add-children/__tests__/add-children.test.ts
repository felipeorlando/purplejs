import addChildren from '../index'

describe('dom addChildren', () => {
  context('when not receive children', () => {
    it('should have a dom with children empty', () => {
      const dom = document.createElement('div')
      const children = []
    
      const domWithChildren = addChildren(dom, children)
    
      expect(domWithChildren.children.length).toEqual(0)
    })
  })

  context('when receive a children', () => {
    const dom = document.createElement('div')
    const children = [{ type: 'a', props: null, children: null }]

    it('should have a same dom const to be immutable', () => {
      const domWithChildren = addChildren(dom, children)
    
      expect(dom.children.length).toEqual(0)
    })

    it('should have a dom with 1 children', () => {
      const domWithChildren = addChildren(dom, children)
    
      expect(domWithChildren.children.length).toEqual(1)
    })

    it('should have a dom with children with nodeName A', () => {
      const domWithChildren = addChildren(dom, children)
    
      expect(domWithChildren.children[0].nodeName).toEqual("A")
    })
  })
})
