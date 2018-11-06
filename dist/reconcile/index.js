import instantiateAndAppend from './instantiate-and-append';
import removeChild from './remove-child';
import newInstanceAndReplaceChild from './new-instance-and-replace-child';
import updateInstaceByType from './update-instance-by-type';
import instanceOfComponent from './instantance-of-component';
const reconcile = (instance, parentDOM, element) => {
    if (instance === null)
        return instantiateAndAppend(element, parentDOM);
    if (element === null)
        return removeChild(parentDOM, instance.dom);
    if (instance.element.type !== element.type)
        return newInstanceAndReplaceChild(element, parentDOM, instance.dom);
    if (typeof element.type === 'string')
        return updateInstaceByType(instance, element);
    return instanceOfComponent(instance, element, parentDOM);
};
export { reconcile };
//# sourceMappingURL=index.js.map