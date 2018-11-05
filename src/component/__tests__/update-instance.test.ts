import updateInstance from '../update-instance'
import * as reconcileObj from '../../reconcile/index'

describe('component updateInstance', () => {
  it('should reconcile properly with the properties', () => {
    const container = document.createElement('div')
    const dom = document.createElement('p')
    const element = { type: 'string', props: {} }
    const spy = spyOn(reconcileObj, 'reconcile')

    container.appendChild(dom)

    const instance = {
      dom,
      element,
      childInstances: [],
    }

    updateInstance(instance)

    expect(spy).toBeCalledWith(instance, container, element)
  })
})
