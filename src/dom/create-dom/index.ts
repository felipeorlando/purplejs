import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'
import addPropsAndEvents from '../add-props-and-events/index'
import addChildren from '../add-children/index'

export default (element: ElementObject | string): HTMLElement | Text => {
  if (typeof element === 'string') return document.createTextNode(element)

  const dom: HTMLElement = document.createElement(element.type as string)
  const children: Object[] = element.children || []

  const domWithProps: HTMLElement = addPropsAndEvents(element, dom)
  const domWithChildren: HTMLElement = addChildren(domWithProps, children)

  return domWithChildren
}
