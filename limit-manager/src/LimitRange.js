import Purple, { Component } from 'purplejs'

export default class LimitRange extends Component {
  render() {
    const {
      maxLimit,
      definedLimit,
      setDefinedLimit,
    } = this.props

    return (
      <div className="range">
        <div className="range__body">
          <input
            type="range"
            className="range__slider"
            min="0"
            max={maxLimit}
            value={definedLimit}
            onChange={setDefinedLimit}
            step="10" />
        </div>

        <div className="range__values">
          <span className="range__value">0</span>
          <span className="range__value">5000</span>
        </div>
      </div>
    )
  }
}
