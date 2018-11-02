import ElementObject from '../interfaces/element-object'
import addPropsAndEvents from '../helpers/dom/add-props-and-events/index'
import addChildren from '../helpers/dom/add-children/index'

export default (element: ElementObject | string): HTMLElement | Text => {
  if (typeof element === 'string') return document.createTextNode(element)

  const dom: HTMLElement = document.createElement(element.type)
  const children: object[] = element.children || []

  addPropsAndEvents(element, dom)

  addChildren(dom, children)

  return dom
}
