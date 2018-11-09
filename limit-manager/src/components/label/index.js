import Purple, { Component } from 'purplejs'
import './index.scss'

export default class Label extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      maxLimit,
      definedLimit
    } = this.props

    return (
      <p className="label">
        R$ <strong>{ maxLimit - definedLimit }</strong>,00 disponível
      </p>
    )
  }
}
