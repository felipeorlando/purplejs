import Instance from '../interfaces/instance'
import ElementObject from '../interfaces/element-object'
import updatePropsAndEvents from '../dom/update-props-and-events/index'
import reconcileChildren from './reconcile-children'

export default (
  instance: Instance,
  element: ElementObject,
): Instance => {
  updatePropsAndEvents(instance.dom, element, instance.element)
  const childInstances: Instance[] = reconcileChildren(instance, element)
  const newInstance = Object.assign(
    {},
    instance,
    { element, childInstances }
  )

  return newInstance
}
