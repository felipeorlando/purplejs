import ElementObject from '../interfaces/element-object'
import Instance from '../interfaces/instance'
import isElementDOM from './is-element-dom'
import instantiateDOM from './instantiate-dom'
import instantiateComponent from './instantiate-component'

export default (element: ElementObject): Instance => {
  return isElementDOM(element)
    ? instantiateDOM(element)
    : instantiateComponent(element)
}
