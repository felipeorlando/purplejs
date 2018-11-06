import addProperty from '../add-property';
describe('dom addProperty', () => {
    it('should have a dom element with properly children', () => {
        const props = { className: 'purple' };
        const element = { type: 'div', props, children: null };
        const dom = document.createElement(element.type);
        addProperty(element, dom, 'className');
        expect(dom.className).toEqual(props.className);
    });
});
//# sourceMappingURL=add-property.js.map