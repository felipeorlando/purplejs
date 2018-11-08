import instantiate from './index';
export default (parentDOM, children) => {
    if (!children)
        return [];
    const childInstances = children.map(instantiate);
    const childDoms = childInstances.map(childInstance => childInstance.dom);
    childDoms.forEach(childDom => parentDOM.appendChild(childDom));
    return childInstances;
};
