import publicInstantiate from '../public-instantiate'
import Component from '../../component/index'

class Button extends Component {}

describe('instantiate publicInstantiate', () => {
  const type = Button
  const props = { className: 'purple' }
  const element = { type, props }
  const instance = {}

  const publicInstance = publicInstantiate(element, instance)

  it('should properly instantiate the class', () => {
    expect(publicInstance instanceof Component).toBeTruthy()
  })

  it('should properly set props to the object', () => {
    expect(publicInstance.props).toEqual(props)
  })

  it('should properly set _internalInstance', () => {
    expect(publicInstance._internalInstance).toEqual(instance)
  })
})
