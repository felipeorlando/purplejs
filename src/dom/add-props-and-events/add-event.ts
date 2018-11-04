import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'

export default (
  element: ElementObject,
  dom: HTMLElement,
  key: string,
): void => {
  const eventType = key.toLowerCase().substring(2);
  dom.addEventListener(eventType, element[key]);
}
