import instantiate from '../index'
import render from '../../render/index'

describe('instantiate', () => {
  context('when receives simple element', () => {
    const element = { type: 'div', props: null }
    const instance = instantiate(element)
    
    describe('instace.dom', () => {
      it('should be a dom rendered element', () => {
        const dom = render(element)
        expect(instance.dom).toEqual(dom)
      })
    })

    describe('instace.element', () => {
      it('should be equals received element', () => {
        expect(instance.element).toEqual(element)
      })
    })

    describe('instace.childInstances', () => {
      it('should be an empty array', () => {
        expect(instance.childInstances).toEqual([])
      })
    })
  })

  context('when receives element with props', () => {
    const element = { type: 'div', props: { className: 'purple' } }
    const instance = instantiate(element)
    
    describe('instace.dom', () => {
      it('should be a dom rendered element with prop', () => {
        expect(instance.dom['className']).toEqual('purple')
      })
    })

    describe('instace.element', () => {
      it('should be equals received element', () => {
        expect(instance.element).toEqual(element)
      })
    })

    describe('instace.childInstances', () => {
      it('should be an empty array', () => {
        expect(instance.childInstances).toEqual([])
      })
    })
  })

  context('when receives element with children', () => {
    const child = { type: 'span', props: null }
    const children = [ child ]
    const element = { type: 'div', props: null, children }
    const instance = instantiate(element)
    
    describe('instace.dom', () => {
      it('should be a dom rendered element with appended child', () => {
        expect(instance.dom.nodeName).toEqual('DIV')
        expect(instance.dom.childNodes[0].nodeName).toEqual('SPAN')
      })
    })

    describe('instace.element', () => {
      it('should be equals received element', () => {
        expect(instance.element).toEqual(element)
      })
    })

    describe('instace.childInstances', () => {
      it('should be equal to list of one child', () => {
        const instantiateChild = instantiate(child)
        expect(instance.childInstances).toEqual([instantiateChild])
      })
    })
  })
})
