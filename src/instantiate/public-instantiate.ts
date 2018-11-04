import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import Component from '../component/index'

export default (
  element: ElementObject,
  internalInstance: Instance | object,
): Component => {
  const { type, props } = element
  const typeComponent: any = type
  const publicInstance = new typeComponent(props)

  publicInstance._internalInstance = internalInstance
  
  return publicInstance
}
