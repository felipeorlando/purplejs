import HTMLElement from '../../../interfaces/html-element'
import ElementObject from '../../../interfaces/element-object'
import removePropsAndEvents from '../remove-props-and-events/index'
import addPropsAndEvents from '../add-props-and-events/index'

export default (
  dom: HTMLElement,
  element: ElementObject,
  prevElement: ElementObject | null = null
): void => {
  if (prevElement) removePropsAndEvents(dom, prevElement.props)

  addPropsAndEvents(element, dom)
}
