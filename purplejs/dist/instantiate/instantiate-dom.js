import createDOM from '../dom/create-dom/index';
import updatePropsAndEvents from '../dom/update-props-and-events/index';
import appendChildrens from './append-childrens';
export default (element) => {
    const { children } = element;
    const dom = createDOM(element);
    updatePropsAndEvents(dom, element);
    const childInstances = appendChildrens(dom, children);
    return { dom, element, childInstances };
};
