import Instance from '../interfaces/instance'
import HTMLElement from '../interfaces/html-element'
import ElementObject from '../interfaces/element-object'
import reconcile from '../reconcile/index'

export default (instance: Instance): void => {
  const parentDOM: HTMLElement = instance.dom.parentNode
  const element: ElementObject = instance.element

  reconcile(instance, parentDOM, element)
}
