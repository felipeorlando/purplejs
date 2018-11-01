import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'

export default (
  node: ElementObject,
  element: HTMLElement
): void => {
  const propKeys = Object.keys(node.props || {})

  if (!propKeys.length) return;
   
  propKeys.forEach(key => element[key] = node.props[key])
}
