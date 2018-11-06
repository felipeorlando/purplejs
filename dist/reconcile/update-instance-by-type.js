import updatePropsAndEvents from '../dom/update-props-and-events/index';
import reconcileChildren from './reconcile-children';
export default (instance, element) => {
    updatePropsAndEvents(instance.dom, element, instance.element);
    const childInstances = reconcileChildren(instance, element);
    const newInstance = Object.assign({}, instance, { element, childInstances });
    return newInstance;
};
//# sourceMappingURL=update-instance-by-type.js.map