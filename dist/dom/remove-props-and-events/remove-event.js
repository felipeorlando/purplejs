export default (dom, key) => {
    const eventType = key.toLowerCase().substring(2);
    const oldEvent = dom[eventType];
    dom.removeEventListener(eventType, oldEvent);
};
//# sourceMappingURL=remove-event.js.map