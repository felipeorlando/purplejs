import { reconcile } from './index';
export default (instance, element) => {
    const { dom, childInstances } = instance;
    const newChildElements = element.children || [];
    const newChildInstances = [];
    const count = Math.max(childInstances.length, newChildElements.length);
    for (let i = 0; i < count; i++) {
        const childInstance = childInstances[i];
        const childElement = newChildElements[i];
        const newChildInstance = reconcile(childInstance, dom, childElement);
        newChildInstances.push(newChildInstance);
    }
    return newChildInstances.filter(instance => instance !== null);
};
