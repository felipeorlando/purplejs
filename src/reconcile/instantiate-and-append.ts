import Instance from '../interfaces/instance'
import HTMLElement from '../interfaces/html-element'
import ElementObject from '../interfaces/element-object'
import instantiate from '../instantiate/index'

export default (
  element: ElementObject,
  parentDOM: HTMLElement,
): Instance => {
  const instance: Instance = instantiate(element)
  parentDOM.appendChild(instance.dom)
  return instance
}
