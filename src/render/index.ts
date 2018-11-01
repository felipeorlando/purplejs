import ElementObject from '../interfaces/element-object'
import addPropsToElement from '../helpers/add-props-to-element/index'
import addChildrenToElement from '../helpers/add-children-to-element/index'

export default (node: ElementObject | string): Text | HTMLElement => {
  if (typeof node === 'string') return document.createTextNode(node)

  const element: HTMLElement = document.createElement(node.type)
  const children: object[] = node.children || []

  addPropsToElement(node, element)

  addChildrenToElement(children, element)

  return element
}
