import { reconcile } from '../reconcile/index';
let rootInstance = null;
const render = (element, container) => {
    const prevInstance = rootInstance;
    const nextInstance = reconcile(prevInstance, container, element);
    rootInstance = nextInstance;
};
export { rootInstance, render, };
//# sourceMappingURL=index.js.map