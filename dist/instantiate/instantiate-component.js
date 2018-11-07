import publicInstantiate from './public-instantiate';
import instantiate from './index';
export default (element) => {
    const instance = {};
    const publicInstance = publicInstantiate(element, instance);
    const childElement = publicInstance.render();
    const childInstance = instantiate(childElement);
    const newInstance = Object.assign({}, instance, {
        element,
        publicInstance,
        dom: childInstance.dom,
        childInstances: [childInstance]
    });
    return newInstance;
};
