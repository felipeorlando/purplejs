import instantiate from '../instantiate/index';
export default (element, parentDOM, dom) => {
    const intance = instantiate(element);
    parentDOM.replaceChild(intance.dom, dom);
    return intance;
};
