import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'

export default (
  dom: HTMLElement,
  key: string,
): void => {
  dom[key] = null
}
