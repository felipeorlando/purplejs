import instantiateAndAppend from './instantiate-and-append';
import removeChild from './remove-child';
import newInstanceAndReplaceChild from './new-instance-and-replace-child';
import updateInstaceByType from './update-instance-by-type';
import instanceOfComponent from './instantance-of-component';
const isDomOrText = (element) => {
    return typeof element === 'string' || typeof element.type === 'string';
};
const prevDiffOfNew = (prevElement, newElement) => {
    if (typeof prevElement === 'string' || typeof newElement === 'string') {
        return prevElement !== newElement;
    }
    return prevElement.type !== newElement.type;
};
const reconcile = (instance, parentDOM, element) => {
    if (instance === null)
        return instantiateAndAppend(element, parentDOM);
    if (element === null)
        return removeChild(parentDOM, instance.dom);
    if (prevDiffOfNew(instance.element, element)) {
        return newInstanceAndReplaceChild(element, parentDOM, instance.dom);
    }
    if (isDomOrText(element)) {
        return updateInstaceByType(instance, element);
    }
    return instanceOfComponent(instance, element, parentDOM);
};
export { reconcile };
