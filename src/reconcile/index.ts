import Instance from '../interfaces/instance'
import HTMLElement from '../interfaces/html-element'
import ElementObject from '../interfaces/element-object'
import updatePropsAndEvents from '../dom/update-props-and-events/index'
import reconcileChildren from './reconcile-children'
import instantiateAndAppendIt from './instantiate-and-append-it'
import removeChildAndNull from './remove-child-and-null'
import newInstanceAndReplaceChild from './new-instance-and-replace-child'

export default (
  instance: Instance,
  parentDOM: HTMLElement,
  element: ElementObject,
): Instance | null => {
  if (instance === null) {
    return instantiateAndAppendIt(element, parentDOM)
  } else if (element === null) {
    return removeChildAndNull(parentDOM, instance.dom)
  } else if (instance.element.type !== element.type) {
    return newInstanceAndReplaceChild(element, parentDOM, instance.dom)
  } else if (typeof element.type === 'string') {
    updatePropsAndEvents(instance.dom, element, instance.element)
    const childInstances: Instance[] = reconcileChildren(instance, element)
    const newInstance = Object.assign(
      {},
      instance,
      { element, childInstances }
    )
    return newInstance
  } else {
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
}
