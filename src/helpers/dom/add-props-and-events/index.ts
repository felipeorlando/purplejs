import ElementObject from '../../../interfaces/element-object'
import HTMLElement from '../../../interfaces/html-element'
import ifElse from '../../if-else/index'
import keyIsEvent from '../key-is-event/index'

const addEvent = (
  node: ElementObject,
  element: HTMLElement,
  key: string,
): void => {
  const eventType = key.toLowerCase().substring(2);
  element.addEventListener(eventType, node[key]);
}

const addProperty = (
  node: ElementObject,
  element: HTMLElement,
  key: string,
): void => {
  element[key] = node.props[key]  
}

export default (
  node: ElementObject,
  element: HTMLElement
): void => {
  const propKeys: string[] = Object.keys(node.props || {})

  if (!propKeys.length) return;
   
  propKeys.forEach(key => {
    ifElse(
      keyIsEvent(key),
      addEvent(node, element, key),
      addProperty(node, element, key)
    )
  })
}

export { addEvent, addProperty }
