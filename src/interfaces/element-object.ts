export default interface ElementObject {
  type: string | Function
  props: object | { [key: string]: boolean | string } | null
  children?: ElementObject[] | null
}
