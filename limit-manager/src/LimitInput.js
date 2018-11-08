import Purple, { Component } from 'purplejs'

export default class LimitInput extends Component {
  render() {
    const { definedLimit, setDefinedLimit } = this.props
    const { inputClass } = this.state
    
    return (
      <span className="input">
        R$ 
        <input
          type="number"
          value={definedLimit}
          onChange={setDefinedLimit}
          className="input__field" />
        ,00
      </span>
    )
  }
}
