import ElementObject from './element-object'

export default interface Instance {
  dom: HTMLElement | Text
  element: ElementObject
  childInstances: Instance | []
}
