import Instance from '../interfaces/instance'
import updateInstance from './update-instance'

export default class Component {
  props: object
  state: object
  render: Function
  _internalInstance: Instance

  constructor(props) {
    this.props = props
    this.state = this.state || {}
  }

  setState(partialState: object): void {
    this.state = Object.assign({}, this.state, partialState)
    updateInstance(this._internalInstance)
  }
}
