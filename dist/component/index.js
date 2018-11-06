import updateInstance from './update-instance';
export default class Component {
    render() { }
    constructor(props = {}) {
        this.props = props;
        this.state = this.state || {};
    }
    setState(partialState) {
        this.state = Object.assign({}, this.state, partialState);
        this.updateInternalInstance(this._internalInstance);
    }
    updateInternalInstance(instance) {
        updateInstance(instance);
    }
}
//# sourceMappingURL=index.js.map