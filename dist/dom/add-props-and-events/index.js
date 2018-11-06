import keyIsEvent from '../key-is-event/index';
import addEvent from './add-event';
import addProperty from './add-property';
export default (element, dom) => {
    const propKeys = Object.keys(element.props || {});
    if (!propKeys.length)
        return;
    propKeys.forEach(key => {
        keyIsEvent(key)
            ? addEvent(element, dom, key)
            : addProperty(element, dom, key);
    });
};
//# sourceMappingURL=index.js.map