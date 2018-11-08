import createElement from '../create-element/index';
const TEXT_ELEMENT = 'TEXT_ELEMENT';
export default (value) => {
    return createElement(TEXT_ELEMENT, { nodeValue: value });
};
export { TEXT_ELEMENT };
