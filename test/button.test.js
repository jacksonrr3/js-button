const Button = require('../src/button.js').Button;     

test('Сhange node text test', () => {
    const testNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(testNode, {text: text});
    expect(testNode.innerText).toBe(text);
});

test('Add class button test', () => {
    const testNode = document.createElement('div');
    const className = 'button';
    const testObj = new Button(testNode, {text: ''});
    expect(testNode.className).toBe(className);
});

test('Add eventHandler test', () => {
    const testNode = document.createElement('div');
    let res;
    const clickHandler = function() {
        res = true;
    };
    const testObj = new Button(testNode, {text: '', onClick: clickHandler});
    testNode.dispatchEvent(new Event('click'));
    expect(res).toBe(true);
});

test('Change text option test', () => {
    const testNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(testNode, {});
    testObj.option({text: text});
    expect(testNode.innerText).toBe(text);
});

test('Change onClick option test', () => {
    const testNode = document.createElement('div');
    let res = false;
    const clickHandler = function() {
        res = true;
    };
    const testObj = new Button(testNode, {});
    testObj.option({onClick: clickHandler});
    testNode.dispatchEvent(new Event('click'));
    expect(res).toBe(true);
});
