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
        R$ <span>{ maxLimit - definedLimit }</span>,00 disponível
      </p>
    )
  }
}
