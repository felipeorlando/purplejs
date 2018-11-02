import Instance from '../../interfaces/instance'
import instantiate from '../index'

export default (
  parentDOM: HTMLElement | Text,
  children
): Instance | [] => {
  if (children instanceof null) return [];

  const childInstances = children.map(instantiate)
  const childDoms = childInstances.map(childInstance => childInstance.dom)

  childDoms.forEach(childDom => parentDOM.appendChild(childDom));

  return childInstances
}
