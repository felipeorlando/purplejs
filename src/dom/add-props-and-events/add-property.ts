import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'

export default (
  element: ElementObject,
  dom: HTMLElement,
  key: string,
): void => {
  dom[key] = element.props[key]  
}
