export default (element, dom, key) => {
    const eventType = key.toLowerCase().substring(2);
    dom.addEventListener(eventType, element.props[key]);
};
