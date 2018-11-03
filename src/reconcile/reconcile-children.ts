import Instance from '../interfaces/instance'
import ElementObject from '../interfaces/element-object'
import reconcile from './index'

export default (
  instance: Instance, 
  element: ElementObject,
): Instance[] => {
  const { dom, childInstances } = instance

  const newChildElements: ElementObject[] | [] = element.children || []

  const newChildInstances = []

  const count: number = Math.max(
    childInstances.length,
    newChildElements.length
  )

  for (let i = 0; i < count; i++) {
    const childInstance = childInstances[i]
    const childElement = newChildElements[i]
    
    const newChildInstance = reconcile(childInstance, dom, childElement)

    newChildInstances.push(newChildInstance)
  }

  return newChildInstances.filter(instance => instance !== null)
}
