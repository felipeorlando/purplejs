import { createElement, Component } from '../../purplejs/dist'
import './index.scss'
/** @jsx createElement */

class LimitLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      maxLimit,
      definedLimit
    } = this.props;

    return <p>{`R$ ${ maxLimit - definedLimit } disponíveis`}</p>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      definedLimit: 2500,
      maxLimit: 5000,
    };
    this.setDefinedLimit = this.setDefinedLimit.bind(this)
  }

  setDefinedLimit(e) {
    this.setState({
      definedLimit: parseInt(e.target.value)
    });
  }

  render() {
    const {
      maxLimit,
      definedLimit
    } = this.state;
    
    return (
      <div>
        <h1>Ajuste de limite</h1>

        <input type="text" value={definedLimit} onChange={this.setDefinedLimit} />

        <LimitLabel maxLimit={maxLimit} definedLimit={definedLimit} />

        <input type="range" min="0" max={maxLimit} value={definedLimit} onChange={this.setDefinedLimit} />
      </div>
    );
  }
}