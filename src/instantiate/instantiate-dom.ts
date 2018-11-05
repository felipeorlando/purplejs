import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import HTMLElement from '../interfaces/html-element'
import createDOM from '../dom/create-dom/index'
import updatePropsAndEvents from '../dom/update-props-and-events/index'
import appendChildrens from './append-childrens'

export default (element: ElementObject): Instance => {
  const { children } = element
  const sampleDOM: HTMLElement | Text = createDOM(element)

  const dom: HTMLElement | Text = updatePropsAndEvents(sampleDOM, element)
  const childInstances: Instance[] = appendChildrens(dom, children)

  return { dom, element, childInstances }
}
