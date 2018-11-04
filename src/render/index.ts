import ElementObject from '../interfaces/element-object'
import HTMLElement from '../interfaces/html-element'
import reconcile from '../reconcile/index'

let rootInstance = null

export default (
  element: ElementObject,
  container: HTMLElement,
): void => {
  const prevInstance = rootInstance
  const nextInstance = reconcile(prevInstance, container, element)
  rootInstance = nextInstance
}
