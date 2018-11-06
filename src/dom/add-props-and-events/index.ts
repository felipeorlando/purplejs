import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'
import keyIsEvent from '../key-is-event/index'
import addEvent from './add-event'
import addProperty from './add-property'

export default (
  element: ElementObject,
  dom: HTMLElement,
): void => {
  const propKeys: string[] = Object.keys(element.props || {})

  if (!propKeys.length) return

  propKeys.forEach(key => {
    keyIsEvent(key)
    ? addEvent(element, dom, key)
    : addProperty(element, dom, key)
  })
}
