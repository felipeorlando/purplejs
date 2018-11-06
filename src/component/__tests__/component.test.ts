import Component from '../index'

describe('Component', () => {
  describe('.constructor', () => {
    context('when pass the props', () => {
      const props = { className: 'purple' }
      const component = new Component(props)
  
      it('should set props properly', () => {
        expect(component.props).toEqual(props)
      })
  
      it('should not set another component properties', () => {
        expect(component.state).toEqual({})
        expect(component._internalInstance).toEqual(undefined)
      })
    })

    context('when do not pass the props', () => {
      const component = new Component()

      it('should have props an empty object', () => {
        expect(component.props).toEqual({})
      })
    })
  })

  describe('.setState', () => {
    it('should set the this.state value', () => {
      const component = new Component()
      component.updateInternalInstance = jest.fn()
      const newState = { color: 'purple' }

      component.setState(newState)

      expect(component.state).toEqual(newState)
    })

    it('should set the this.state value', () => {
      const component = new Component()
      component.updateInternalInstance = jest.fn()
      const firstState = { color: null }
      const secondState = { color: 'purple' }

      component.setState(firstState)
      component.setState(secondState)

      expect(component.state).toEqual(secondState)
    })

    it('should change this.state maintaining not modifieds', () => {
      const component = new Component()
      component.updateInternalInstance = jest.fn()
      const expectedState = {
        color: 'purple',
        taxes: null,
      }

      component.setState({ color: 'purple' })
      component.setState({ taxes: null })

      expect(component.state).toEqual(expectedState)
    })

    it('should call updateInternalInstance', () => {
      const component = new Component()
      component.updateInternalInstance = jest.fn()
      const spy = jest.spyOn(component, 'updateInternalInstance')

      component.setState({ taxes: null })

      expect(spy).toHaveBeenCalled()
    })
  })
})
