import HTMLElement from '../../interfaces/html-element'
import ElementObject from '../../interfaces/element-object'
import createDOM from '../create-dom/index'

export default (
  dom: HTMLElement,
  children: Object[]
): HTMLElement => {
  if (!children.length) return dom
  
  const clonedDOM: HTMLElement = dom.cloneNode()

  children.forEach((child: ElementObject) => {
    const childElement = createDOM(child)
    clonedDOM.appendChild(childElement)
  })

  return clonedDOM
}
