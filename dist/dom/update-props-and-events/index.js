import removePropsAndEvents from '../remove-props-and-events/index';
import addPropsAndEvents from '../add-props-and-events/index';
export default (dom, element, prevElement = null) => {
    if (prevElement)
        removePropsAndEvents(dom, prevElement.props);
    addPropsAndEvents(element, dom);
};
