import addPropsAndEvents from '../add-props-and-events/index';
export default (element) => {
    if (typeof element === 'string')
        return document.createTextNode(element);
    const dom = document.createElement(element.type);
    const children = element.children || [];
    addPropsAndEvents(element, dom);
    return dom;
};
