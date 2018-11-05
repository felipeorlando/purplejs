import ElementObject from '../../interfaces/element-object'
import HTMLElement from '../../interfaces/html-element'
import ifElse from '../../helpers/if-else'
import keyIsEvent from '../key-is-event/index'
import addEvent from './add-event'
import addProperty from './add-property'

export default (
  element: ElementObject,
  dom: HTMLElement,
): HTMLElement => {
  const propKeys: string[] = Object.keys(element.props || {})

  if (!propKeys.length) return dom;
  
  const clonedDOM: HTMLElement = dom.cloneNode()
   
  propKeys.forEach(key => {
    ifElse(
      keyIsEvent(key),
      addEvent(element, clonedDOM, key),
      addProperty(element, clonedDOM, key)
    )
  })

  return clonedDOM
}
