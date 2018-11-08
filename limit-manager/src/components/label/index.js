import Purple, { Component } from 'purplejs'

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
      <span className="input__info">
        { `R$ ${ maxLimit - definedLimit },00 disponível` }
      </span>
    )
  }
}
