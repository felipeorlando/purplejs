import ElementObject from '../interfaces/element-object'
import addPropsAndEvents from '../helpers/dom/add-props-and-events/index'
import addChildren from '../helpers/dom/add-children/index'

export default (node: ElementObject | string): Text | HTMLElement => {
  if (typeof node === 'string') return document.createTextNode(node)

  const element: HTMLElement = document.createElement(node.type)
  const children: object[] = node.children || []

  addPropsAndEvents(node, element)

  addChildren(element, children)

  return element
}
