import HTMLElement from '../../interfaces/html-element'
import keyIsEvent from '../key-is-event/index'
import removeEvent from './remove-event'
import removeProperty from './remove-property'

export default (
  dom: HTMLElement,
  props: Object,
): void => {
  const propKeys: string[] = Object.keys(props || {})
   
  propKeys.forEach((key: string) => {
    keyIsEvent(key)
    ? removeEvent(dom, key)
    : removeProperty(dom, key)
  })
}
