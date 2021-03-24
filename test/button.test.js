const button = require('../src/button.js').button;

test('node change text test', () => {
    const testNode = document.createElement('div');
    const text = 'test_text';
    button(testNode, {text: text});
    expect(testNode.innerText).toBe(text);
});

test('it should add class button', () => {
    const testNode = document.createElement('div');
    const className = 'button';
    button(testNode, {text: ''});
    expect(testNode.className).toBe(className);
});

test('it should add eventHandler', () => {
    const testNode = document.createElement('div');
    let res;
    const clickHandler = function() {
        res = true;
    };
    button(testNode, {text: '', onClick: clickHandler});
    testNode.dispatchEvent(new Event('click'));
    expect(res).toBe(true);
});
