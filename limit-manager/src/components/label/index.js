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
      <span className="label">
        { `R$ ${ maxLimit - definedLimit },00 disponível` }
      </span>
    )
  }
}
