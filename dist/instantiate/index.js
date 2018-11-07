import isElementDOM from './is-element-dom';
import instantiateDOM from './instantiate-dom';
import instantiateComponent from './instantiate-component';
export default (element) => {
    return isElementDOM(element)
        ? instantiateDOM(element)
        : instantiateComponent(element);
};
