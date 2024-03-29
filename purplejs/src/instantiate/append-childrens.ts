import HTMLElement from '../interfaces/html-element'
import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import instantiate from './index'

export default (
  parentDOM: HTMLElement | Text,
  children: ElementObject[] | null
): Instance[] | [] => {
  if (!children) return [];

  const childInstances = children.map(instantiate)
  const childDoms = childInstances.map(childInstance => childInstance.dom)
  
  childDoms.forEach(childDom => parentDOM.appendChild(childDom));

  return childInstances
}
