import ElementObject from '../../interfaces/element-object'
import render from '../../render/index'

export default (
  element: HTMLElement,
  children: object[]
): void => {
  children.forEach((child: ElementObject) => {
    const childElement = render(child)
    element.appendChild(childElement)
  })
}
