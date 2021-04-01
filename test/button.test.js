const Button = require('../src/button.js').Button;     

test('Сhange node text', () => {
    const buttonNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(buttonNode, {text: text});
    expect(buttonNode.innerText).toBe(text);
});

test('Add class button', () => {
    const buttonNode = document.createElement('div');
    const testObj = new Button(buttonNode, {text: ''});
    expect(buttonNode.classList.contains('button')).toBe(true);
});

test('Add eventHandler', () => {
    const buttonNode = document.createElement('div');
    let handlerIsCalled;
    const clickHandler = function() {
        handlerIsCalled = true;
    };
    const testObj = new Button(buttonNode, {text: '', onClick: clickHandler});
    buttonNode.dispatchEvent(new Event('click'));
    expect(handlerIsCalled).toBe(true);
});

test('Change text option', () => {
    const buttonNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(buttonNode, {});
    testObj.option({text: text});
    expect(buttonNode.innerText).toBe(text);
});

test('Change onClick option', () => {
    const buttonNode = document.createElement('div');
    let handlerIsCalled = false;
    const clickHandler = function() {
        handlerIsCalled = true;
    };
    const testObj = new Button(buttonNode, {});
    testObj.option({onClick: clickHandler});
    buttonNode.dispatchEvent(new Event('click'));
    expect(handlerIsCalled).toBe(true);
});

test('Add class selector at node', () => {
    const buttonNode = document.createElement('div');
    buttonNode.className = 'element';
    const buttonObject = new Button(buttonNode, {});
    expect(buttonNode.classList.contains('element')).toBe(true);
});
