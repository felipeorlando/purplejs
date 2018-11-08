import Purple, { Component } from 'purplejs'

export default class LimitLabel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      maxLimit,
      definedLimit
    } = this.props

    return <p>{ `R$ ${ maxLimit - definedLimit } disponíveis` }</p>
  }
}
