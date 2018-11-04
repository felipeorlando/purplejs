import Element from '../interfaces/element-object'
import Instance from '../interfaces/instance'

export default (
  element: Element,
  instance: Instance,
): Instance => {
  const { type, props } = element
  const publicInstance = new type(props)
  publicInstance.instance = instance
  
  return publicInstance
}
