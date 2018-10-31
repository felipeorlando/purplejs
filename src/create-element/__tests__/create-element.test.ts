import createElement from '../index'

describe('createElement', () => {
  context('when element is a simple div', () => {
    it('returns type as div without props', () => {
      const result = createElement('div', null)
      expect(result).toEqual({ type: 'div', props: null })
    })
  })

  context('when element is a div with props', () => {
    it('returns type as div with props', () => {
      const result = createElement('div', { className: 'purple' })
      expect(result).toEqual({ type: 'div', props: { className: 'purple' } })
    })
  })

  context('when element is a div with childrens', () => {
    it('returns type as div with children as a prop', () => {
      const result = createElement(
        'div',
        null,
        createElement('p', null),
        createElement('p', null),
      )
      expect(result).toEqual({
        type: 'div', 
        props: {
          children: [
            { type: 'p', props: null },
            { type: 'p', props: null },
          ]
        }
      })
    })
  })

  context('when element is a p with text child', () => {
    it('returns type as p with text child', () => {
      const result = createElement(
        'p',
        null,
        'Paragraph',
      )
      expect(result).toEqual({
        type: 'p', 
        props: {
          children: ['Paragraph']
        }
      })
    })
  })
})
