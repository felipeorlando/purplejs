import { render, rootInstance } from '../index'

describe('render', () => {
  const element = { type: 'span', props: null }
  const container = document.createElement('div')
  const expected = {
    element: { type: 'span', props: null },
    dom: document.createElement('span'),
    childInstances: [],
  }
  
  render(element, container)

  it('should change rootInstance value', () => {
    expect(rootInstance).toEqual(expected)
  })

  it('should match expected instance', () => {
    expect(rootInstance).toEqual(expected)
  })

  it('should change dom with properly child', () => {
    expect(container.childNodes.length).toEqual(1)
    expect(container.childNodes[0].nodeName).toEqual('SPAN')
  })
})
