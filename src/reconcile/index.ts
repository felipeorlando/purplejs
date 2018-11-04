import Instance from '../interfaces/instance'
import HTMLElement from '../interfaces/html-element'
import ElementObject from '../interfaces/element-object'
import instantiateAndAppend from './instantiate-and-append'
import removeChild from './remove-child'
import newInstanceAndReplaceChild from './new-instance-and-replace-child'
import updateInstaceByType from './update-instance-by-type'
import instanceOfComponent from './instantance-of-component'

export default (
  instance: Instance,
  parentDOM: HTMLElement,
  element: ElementObject,
): Instance | null => {
  if (instance === null) return instantiateAndAppend(element, parentDOM)

  if (element === null) return removeChild(parentDOM, instance.dom)

  if (instance.element.type !== element.type) return newInstanceAndReplaceChild(element, parentDOM, instance.dom)
  
  if (typeof element.type === 'string') return updateInstaceByType(instance, element)

  return instanceOfComponent(instance, element, parentDOM)
}
