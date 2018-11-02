import ElementObject from '../../../interfaces/element-object'
import HTMLElement from '../../../interfaces/html-element'
import ifElse from '../../if-else/index'
import keyIsEvent from '../key-is-event/index'

const removeEvent = (
  dom: HTMLElement,
  key: string,
): void => {
  const eventType = key.toLowerCase().substring(2);
  const oldEvent = dom[eventType]
  dom.removeEventListener(eventType, oldEvent);
}

const removeProperty = (
  dom: HTMLElement,
  key: string,
): void => {
  dom[key] = null
}

export default (
  dom: HTMLElement,
  props: object,
): void => {
  const propKeys: string[] = Object.keys(props || {})
   
  propKeys.forEach((key: string) => {
    ifElse(
      keyIsEvent(key),
      removeEvent(dom, key),
      removeProperty(dom, key)
    )
  })
}
