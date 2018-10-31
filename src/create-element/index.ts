interface ElementObject {
  type: string;
  props: object;
  children: Array<object> | null;
}

export default (
  type: string,
  props: object,
  ...args: Array<string | object>
): ElementObject => {
  const children = args.length ? [].concat(...args) : null;
  return { type, props, children }
}
