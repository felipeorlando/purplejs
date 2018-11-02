import ElementObject from '../../../interfaces/element-object'
import HTMLElement from '../../../interfaces/html-element'
import ifElse from '../../if-else/index'
import keyIsEvent from '../key-is-event/index'

const addEvent = (
  element: ElementObject,
  dom: HTMLElement,
  key: string,
): void => {
  const eventType = key.toLowerCase().substring(2);
  dom.addEventListener(eventType, element[key]);
}

const addProperty = (
  element: ElementObject,
  dom: HTMLElement,
  key: string,
): void => {
  dom[key] = element.props[key]  
}

export default (
  element: ElementObject,
  dom: HTMLElement
): void => {
  const propKeys: string[] = Object.keys(element.props || {})

  if (!propKeys.length) return;
   
  propKeys.forEach(key => {
    ifElse(
      keyIsEvent(key),
      addEvent(element, dom, key),
      addProperty(element, dom, key)
    )
  })
}

export { addEvent, addProperty }
