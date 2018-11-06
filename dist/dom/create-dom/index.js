import addPropsAndEvents from '../add-props-and-events/index';
import addChildren from '../add-children/index';
export default (element) => {
    if (typeof element === 'string')
        return document.createTextNode(element);
    const dom = document.createElement(element.type);
    const children = element.children || [];
    addPropsAndEvents(element, dom);
    addChildren(dom, children);
    return dom;
};
//# sourceMappingURL=index.js.map