import Instance from '../interfaces/instance'
import ElementObject from '../interfaces/element-object'
import HTMLElement from '../interfaces/html-element'
import { reconcile } from './index'

export default (
  instance: Instance,
  element: ElementObject,
  parentDOM: HTMLElement,
) => {
  instance.publicInstance.props = element.props

  const childElement = instance.publicInstance.render()
  const oldChildInstance = instance.childInstances[0]

  const childInstance = reconcile(oldChildInstance, parentDOM, childElement)

  const newInstance = Object.assign(
    {},
    instance,
    {
      dom: childInstance.dom,
      childInstances: [childInstance],
      element,
    }
  )

  return newInstance
}
