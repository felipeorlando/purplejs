import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import Component from '../component/index'

export default (
  element: ElementObject,
  instance: Instance | object,
): Component => {
  const { type, props } = element
  const publicInstance = new type(props)

  publicInstance._internalInstance = instance
  
  return publicInstance
}
