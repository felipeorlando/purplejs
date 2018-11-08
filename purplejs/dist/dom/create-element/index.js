import createTextElement from '../create-text-element/index';
const childOrTextElement = (child) => (child instanceof Object ? child : createTextElement(child));
export default (type, props, ...args) => {
    const rawChildren = args.length ? [].concat(...args) : [];
    const children = rawChildren.map(childOrTextElement);
    return { type, props, children };
};
