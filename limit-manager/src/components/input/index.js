import Purple, { Component } from 'purplejs'
import './index.scss'

export default class Input extends Component {
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
