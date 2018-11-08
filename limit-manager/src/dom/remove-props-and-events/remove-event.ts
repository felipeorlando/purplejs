import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'

export default (
  dom: HTMLElement,
  key: string,
): void => {
  const eventType = key.toLowerCase().substring(2);
  const oldEvent = dom[eventType]
  dom.removeEventListener(eventType, oldEvent);
}
