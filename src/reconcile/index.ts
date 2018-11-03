import Instance from '../interfaces/instance'
import HTMLElement from '../interfaces/html-element'
import ElementObject from '../interfaces/element-object'
import instantiate from '../instantiate/index'
import updatePropsAndEvents from '../dom/update-props-and-events/index'
import reconcileChildren from './reconcile-children'

const instantiateAndAppendIt = (
  element: ElementObject,
  parentDOM: HTMLElement,
): Instance => {
  const instance: Instance = instantiate(element)
  parentDOM.appendChild(instance.dom)
  return instance
}

const removeChildAndNull = (
  parentDOM: HTMLElement,
  dom: HTMLElement,
): null => {
  parentDOM.removeChild(dom)
  return null
}

const newInstanceAndReplaceChild = (
  element: ElementObject,
  parentDOM: HTMLElement,
  dom: HTMLElement
): Instance => {
  const intance: Instance = instantiate(element)
  parentDOM.replaceChild(intance.dom, dom)
  return intance
}

const reconcile = (
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
  }
}

export default reconcile
