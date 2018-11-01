import createElement from '../index'

describe('createElement as jsx', () => {
  context('when element is a simple div', () => {
    it('returns type as div without props', () => {
      const jsx = <div />
      const parsedJSX = createElement('div', null)
      expect(jsx).toEqual(parsedJSX)
    })
  })

  context('when element is a div with props', () => {
    it('returns type as div with props', () => {
      const jsx = <div className="purple" />
      const parsedJSX = createElement('div', { className: 'purple' })
      expect(jsx).toEqual(parsedJSX)
    })
  })

  context('when element is a div with childrens', () => {
    it('returns type as div with children as a prop', () => {
      const jsx = <div><p /><p /></div>
      const parsedJSX = createElement(
        'div',
        null,
        createElement('p', null),
        createElement('p', null),
      )
      expect(jsx).toEqual(parsedJSX)
    })
  })

  context('when element is a p with text child', () => {
    it('returns type as p with text child', () => {
      const jsx = <p>Paragraph</p>
      const parsedJSX = createElement('p', null, 'Paragraph')
      expect(jsx).toEqual(parsedJSX)
    })
  })
})
