import ElementObject from '../interfaces/element-object'

export default (element: ElementObject): Boolean => {
  return typeof element.type === 'string'
}
