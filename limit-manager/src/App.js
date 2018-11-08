import Purple, { Component } from '../../purplejs/dist'
import Label from './components/label'
import Input from './components/input'
import Range from './components/range'

import 'sanitize.css'
import './index.scss'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      definedLimit: 2500,
      maxLimit: 5000,
    }
    this.setDefinedLimit = this.setDefinedLimit.bind(this)
  }

  setDefinedLimit(e) {
    const { maxLimit } = this.state
    const value = parseInt(e.target.value)

    if (value > maxLimit) {
      this.setState({ definedLimit: maxLimit })
      return
    }

    if (value < 0) {
      this.setState({ definedLimit: 0 })
      return
    }

    this.setState({ definedLimit: value })
  }

  render() {
    const {
      maxLimit,
      definedLimit
    } = this.state
    
    return (
      <div className="card">
        <h1 className="card__title">Ajuste de limite</h1>

        <div className="card__body">
          <Input
            definedLimit={definedLimit}
            setDefinedLimit={this.setDefinedLimit} />

          <Label maxLimit={maxLimit} definedLimit={definedLimit} />

          <Range
            maxLimit={maxLimit}
            definedLimit={definedLimit} 
            setDefinedLimit={this.setDefinedLimit} />
        </div>
      </div>
    )
  }
}
