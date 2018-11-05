import HTMLElement from '../../interfaces/html-element'
import ElementObject from '../../interfaces/element-object'
import removePropsAndEvents from '../remove-props-and-events/index'
import addPropsAndEvents from '../add-props-and-events/index'

export default (
  dom: HTMLElement,
  element: ElementObject,
  prevElement: ElementObject | null = null
): HTMLElement => {

  const emptyDOM: HTMLElement | null = prevElement
    ? removePropsAndEvents(dom, prevElement.props)
    : null

  const emptyOrFilledDOM = emptyDOM || dom

  return addPropsAndEvents(element, emptyOrFilledDOM)
}
