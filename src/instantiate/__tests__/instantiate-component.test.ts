import instantiateComponent from '../instantiate-component'
import Component from '../../component/index'

class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return { type: 'div', props: null }
  }
}

describe('instantiate instantiateComponent', () => {
  it('should instantiate component properly', () => {
    const type = Button
    const props = { className: null }
    const element = { type, props }
  
    const componentInstantiated = instantiateComponent(element)
  
    const expected = {
      element,
      publicInstance: {
        _internalInstance: {},
        props: {
          className: null,
        },
        state: {},
      },
      dom: document.createElement('div'),
      childInstances: [{
        dom: document.createElement('div'),
        element: { type: 'div', props: null },
        childInstances: [],
      }]
    }
  
    expect(componentInstantiated).toEqual(expected)
  })
})
