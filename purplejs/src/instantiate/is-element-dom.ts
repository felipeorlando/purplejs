import ElementObject from '../interfaces/element-object'

export default (element: ElementObject): Boolean => {
  if (typeof element === 'string') return true

  if (typeof element.type === 'string') return true

  return false
}
