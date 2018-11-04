import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import createDOM from '../dom/create-dom/index'
import updatePropsAndEvents from '../dom/update-props-and-events/index'
import appendChildrens from './append-childrens'
import instantiateComponent from './instantiate-component'

const isElementDOM = (element: ElementObject): Boolean => {
  return typeof element.type === 'string'
}

const instantiateDOM = (element: ElementObject): Instance => {
  const { children } = element
  const dom: HTMLElement | Text = createDOM(element)

  updatePropsAndEvents(dom, element)

  const childInstances = appendChildrens(dom, children)

  return { dom, element, childInstances }
}

export default (element: ElementObject): Instance => {
  return isElementDOM(element)
    ? instantiateDOM(element)
    : instantiateComponent(element)
}
