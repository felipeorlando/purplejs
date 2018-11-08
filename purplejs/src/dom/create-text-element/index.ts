import ElementObject from '../../interfaces/element-object'
import createElement from '../create-element/index'

const TEXT_ELEMENT = 'TEXT_ELEMENT';

export default (value: String): ElementObject => {
  return createElement(TEXT_ELEMENT, { nodeValue: value });
}

export { TEXT_ELEMENT }
