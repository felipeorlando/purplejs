import ElementObject from '../../interfaces/element-object'
import createDOM from '../create-dom/index'

export default (
  dom: HTMLElement,
  children: Object[]
): void => {
  children.forEach((child: ElementObject) => {
    const childElement = createDOM(child)
    dom.appendChild(childElement)
  })
}
