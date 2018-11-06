export default (type, props, ...args) => {
    const children = args.length ? [].concat(...args) : null;
    return { type, props, children };
};
//# sourceMappingURL=index.js.map