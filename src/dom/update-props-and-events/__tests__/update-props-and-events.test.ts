import instantiate from '../../../instantiate/index'
import updatePropsAndEvents from '../index'

describe('dom updatePropsAndEvents', () => {
  context('when do not receive prevElement', () => {
    it('should add new props', () => {
      const element = { type: 'div', props: { className: 'purple' } }
      const newElement = { type: 'div', props: { id: 'revolution' } }
      const instance = instantiate(element)
  
      const result = updatePropsAndEvents(instance.dom, newElement)
  
      expect(result.className).toEqual('purple')
      expect(result.id).toEqual('revolution')
    })

    it('should update existing props', () => {
      const element = { type: 'div', props: { className: 'purple' } }
      const newElement = { type: 'div', props: { className: 'revolution' } }
      const instance = instantiate(element)
  
      const result = updatePropsAndEvents(instance.dom, newElement)
  
      expect(result.className).toEqual('revolution')
    })
  })

  context('when receive prevElement', () => {
    it('should remove props on prevElement', () => {
      const element = { type: 'div', props: { className: 'purple' } }
      const newElement = { type: 'div', props: { id: 'revolution' } }
      const instance = instantiate(element)
  
      const result = updatePropsAndEvents(instance.dom, newElement, element)
  
      expect(result.className).toEqual('null')
    })
  })
})
