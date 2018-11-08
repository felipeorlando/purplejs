import keyIsEvent from '../key-is-event/index';
import removeEvent from './remove-event';
import removeProperty from './remove-property';
export default (dom, props) => {
    const propKeys = Object.keys(props || {});
    propKeys.forEach((key) => {
        keyIsEvent(key)
            ? removeEvent(dom, key)
            : removeProperty(dom, key);
    });
};
