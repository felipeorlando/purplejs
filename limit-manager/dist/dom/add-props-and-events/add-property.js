export default (element, dom, key) => {
    dom[key] = element.props[key];
};
