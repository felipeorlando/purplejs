import Instance from '../interfaces/instance'
import updateInstance from './update-instance'

export default class Component {
  props: Object
  state: Object
  render: Function
  _internalInstance: Instance

  constructor(props: Object) {
    this.props = props
    this.state = this.state || {}
  }

  setState(partialState: Object): void {
    this.state = Object.assign({}, this.state, partialState)
    updateInstance(this._internalInstance)
  }
}
