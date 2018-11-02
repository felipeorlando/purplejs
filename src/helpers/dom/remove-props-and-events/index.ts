import ElementObject from '../../../interfaces/element-object'
import HTMLElement from '../../../interfaces/html-element'
import ifElse from '../../if-else/index'
import keyIsEvent from '../key-is-event/index'

const removeEvent = (
  node: ElementObject,
  element: HTMLElement,
  key: string,
): void => {
  const eventType = key.toLowerCase().substring(2);
  element.removeEventListener(eventType, node[key]);
}

const removeProperty = (
  node: ElementObject,
  element: HTMLElement,
  key: string,
): void => {
  element[key] = null
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
      removeEvent(node, element, key),
      removeProperty(node, element, key)
    )
  })
}

export { removeEvent, removeProperty }
