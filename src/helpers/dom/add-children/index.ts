import ElementObject from '../../../interfaces/element-object'
import render from '../../../render/index'

export default (
  dom: HTMLElement,
  children: object[]
): void => {
  children.forEach((child: ElementObject) => {
    const childElement = render(child)
    dom.appendChild(childElement)
  })
}
