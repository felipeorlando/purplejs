import addPropsAndEvents from '../add-props-and-events/index';
import { TEXT_ELEMENT } from '../create-text-element/index';
const isTextElement = (element) => (element.type === TEXT_ELEMENT);
export default (element) => {
    const dom = isTextElement(element)
        ? document.createTextNode('')
        : document.createElement(element.type);
    const children = element.children || [];
    addPropsAndEvents(element, dom);
    return dom;
};
