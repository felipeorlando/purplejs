export default (element, instance) => {
    const { type, props } = element;
    const publicInstance = new type(props);
    publicInstance._internalInstance = instance;
    return publicInstance;
};
