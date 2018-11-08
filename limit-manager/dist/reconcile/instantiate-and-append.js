import instantiate from '../instantiate/index';
export default (element, parentDOM) => {
    const instance = instantiate(element);
    parentDOM.appendChild(instance.dom);
    return instance;
};
