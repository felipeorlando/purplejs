import ElementObject from '../../interfaces/element-object'
import createTextElement from '../create-text-element/index'

const childOrTextElement = (
  child: ElementObject
): ElementObject => (
  child instanceof Object ? child : createTextElement(child)
)

export default (
  type: string,
  props: Object,
  ...args: Array<string | object>
): ElementObject => {
  const rawChildren = args.length ? [].concat(...args) : []
  const children: ElementObject[] = rawChildren.map(childOrTextElement)
  return { type, props, children }
}
