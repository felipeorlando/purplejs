import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import publicInstantiate from './public-instantiate'
import instantiate from './index'

export default (element: ElementObject): Instance => {
  const instance = {}
  const publicInstance = publicInstantiate(element, instance)
  const childElement = publicInstance.render()
  const childInstance = instantiate(childElement)

  const newInstance = Object.assign(
    {},
    instance,
    {
      element,
      publicInstance,
      dom: childInstance.dom,
      childInstances: [childInstance]
    },
  )

  return newInstance
}
