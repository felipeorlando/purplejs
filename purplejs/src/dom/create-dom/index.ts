import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'
import addPropsAndEvents from '../add-props-and-events/index'
import { TEXT_ELEMENT } from '../create-text-element/index'

const isTextElement = (
  element: ElementObject
): Boolean => (
  element.type === TEXT_ELEMENT
)

export default (element: ElementObject): HTMLElement => {
  const dom: HTMLElement = isTextElement(element)
    ? document.createTextNode('')
    : document.createElement(element.type as string)
    
  const children: Object[] = element.children || []

  addPropsAndEvents(element, dom)

  return dom
}
