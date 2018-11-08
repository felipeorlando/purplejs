import ElementObject from '../interfaces/element-object'
import HTMLElement from '../interfaces/html-element'
import Instance from '../interfaces/instance'
import instantiate from '../instantiate/index'

export default (
  element: ElementObject,
  parentDOM: HTMLElement,
  dom: HTMLElement
): Instance => {
  const intance: Instance = instantiate(element)
  parentDOM.replaceChild(intance.dom, dom)
  return intance
}
