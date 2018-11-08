import { reconcile } from '../reconcile/index';
export default (instance) => {
    const parentDOM = instance.dom.parentNode;
    const element = instance.element;
    reconcile(instance, parentDOM, element);
};
