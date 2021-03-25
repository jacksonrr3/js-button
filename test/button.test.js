const Button = require('../src/button.js').Button;     

test('Сhange node text', () => {
    const testNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(testNode, {text: text});
    expect(testNode.innerText).toBe(text);
});

test('Add class button', () => {
    const testNode = document.createElement('div');
    const className = 'button';
    const testObj = new Button(testNode, {text: ''});
    expect(testNode.className).toBe(className);
});

test('Add eventHandler', () => {
    const testNode = document.createElement('div');
    let handlerIsCalled;
    const clickHandler = function() {
        handlerIsCalled = true;
    };
    const testObj = new Button(testNode, {text: '', onClick: clickHandler});
    testNode.dispatchEvent(new Event('click'));
    expect(handlerIsCalled).toBe(true);
});

test('Change text option', () => {
    const testNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(testNode, {});
    testObj.option({text: text});
    expect(testNode.innerText).toBe(text);
});

test('Change onClick option', () => {
    const testNode = document.createElement('div');
    let handlerIsCalled = false;
    const clickHandler = function() {
        handlerIsCalled = true;
    };
    const testObj = new Button(testNode, {});
    testObj.option({onClick: clickHandler});
    testNode.dispatchEvent(new Event('click'));
    expect(handlerIsCalled).toBe(true);
});
