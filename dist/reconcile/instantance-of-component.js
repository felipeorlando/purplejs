import { reconcile } from './index';
export default (instance, element, parentDOM) => {
    instance.publicInstance.props = element.props;
    const childElement = instance.publicInstance.render();
    const oldChildInstance = instance.childInstances[0];
    const childInstance = reconcile(oldChildInstance, parentDOM, childElement);
    const newInstance = Object.assign({}, instance, {
        dom: childInstance.dom,
        childInstances: [childInstance],
        element,
    });
    return newInstance;
};
