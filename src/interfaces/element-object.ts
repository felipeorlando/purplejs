export default interface ElementObject {
  type: string
  props: object | { [key: string]: boolean | string } | null
  children?: any[] | ElementObject[] | null
}
