import Instance from '../interfaces/instance'
import updateInstance from './update-instance'

export default class Component {
  props: Object
  state: Object
  _internalInstance: Instance
  render(): any {}

  constructor(props: Object = {}) {
    this.props = props
    this.state = this.state || {}
  }

  setState(partialState: Object): void {
    this.state = Object.assign({}, this.state, partialState)
    this.updateInternalInstance(this._internalInstance)
  }

  updateInternalInstance(instance: Instance): void {
    return updateInstance(instance)
  }
}
