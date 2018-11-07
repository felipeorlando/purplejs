import createDOM from '../create-dom/index';
export default (dom, children) => {
    if (!children.length)
        return;
    children.forEach((child) => {
        const childElement = createDOM(child);
        // dom.appendChild(childElement)
    });
};
