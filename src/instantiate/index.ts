import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import render from '../render/index'
import updatePropsAndEvents from '../dom/update-props-and-events/index'
import appendChildrens from './append-childrens/index'

const instantiate = (element: ElementObject): Instance => {
  const { children } = element
  const dom: HTMLElement | Text = render(element)

  updatePropsAndEvents(dom, element)

  const childInstances = appendChildrens(dom, children)

  return { dom, element, childInstances }
}

export default instantiate
