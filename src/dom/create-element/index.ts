import ElementObject from '../../interfaces/element-object'

export default (
  type: string,
  props: object,
  ...args: Array<string | object>
): ElementObject => {
  const children = args.length ? [].concat(...args) : null;
  return { type, props, children }
}
