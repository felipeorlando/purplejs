import Component from '../component/index'
export default interface ElementObject {
  type: string | Component
  props: Object | { [key: string]: boolean | string } | null
  children?: ElementObject[] | null
}
