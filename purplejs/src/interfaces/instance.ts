import HTMLElement from './html-element'
import ElementObject from './element-object'
import Component from '../component/index'

export default interface Instance {
  dom: HTMLElement
  element: ElementObject
  childInstances: Instance[] | []
  publicInstance?: Component
}
