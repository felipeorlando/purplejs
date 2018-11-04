import ElementObject from '../../interfaces/element-object'
import addPropsAndEvents from '../add-props-and-events/index'
import addChildren from '../add-children/index'

export default (element: ElementObject | string): HTMLElement | Text => {
  if (typeof element === 'string') return document.createTextNode(element)

  const dom: HTMLElement = document.createElement(element.type)
  const children: Object[] = element.children || []

  addPropsAndEvents(element, dom)
  addChildren(dom, children)

  return dom
}
