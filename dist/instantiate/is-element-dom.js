export default (element) => {
    if (typeof element === 'string')
        return true;
    if (typeof element.type === 'string')
        return true;
    return false;
};
//# sourceMappingURL=is-element-dom.js.map