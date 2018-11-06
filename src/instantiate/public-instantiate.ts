import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import Component from '../component/index'

export default (
  element: ElementObject,
  instance: Instance | object,
): Component => {
  const { type, props } = element
  const TypeComponent: any = type
  const publicInstance = new TypeComponent(props)

  publicInstance._internalInstance = instance
  
  return publicInstance
}
