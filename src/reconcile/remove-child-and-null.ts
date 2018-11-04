import HTMLElement from '../interfaces/html-element'

export default (
  parentDOM: HTMLElement,
  dom: HTMLElement,
): null => {
  parentDOM.removeChild(dom)
  return null
}
