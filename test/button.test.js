import { Button } from '../src/button';

test('Button correctly displays "text" option', () => {
    const buttonNode = document.createElement('div');
    const text = 'test_text';
    new Button(buttonNode, {text: text});
    expect(buttonNode.innerText).toBe(text);
});

test('Button adds class "button" to an element', () => {
    const buttonNode = document.createElement('div');
    new Button(buttonNode, {text: ''});
    expect(buttonNode.classList.contains('button')).toBe(true);
});

test('onClick handler is called after element clicked', () => {
    const buttonNode = document.createElement('div');
    let handlerIsCalled;
    const clickHandler = function() {
        handlerIsCalled = true;
    };
    new Button(buttonNode, {text: '', onClick: clickHandler});
    buttonNode.dispatchEvent(new Event('click'));
    expect(handlerIsCalled).toBe(true);
});

test('Button.option method correctly applies new "text" option', () => {
    const buttonNode = document.createElement('div');
    const text = 'test_text';
    const testObj = new Button(buttonNode, {});
    testObj.option({text: text});
    expect(buttonNode.innerText).toBe(text);
});

test('Button.option method correctly changes "onClick" option', () => {
    const buttonNode = document.createElement('div');
    let handlerIsCalled;
    const clickHandler = function() {
        handlerIsCalled = true;
    };
    const testObj = new Button(buttonNode, {});
    testObj.option({onClick: clickHandler});
    buttonNode.dispatchEvent(new Event('click'));
    expect(handlerIsCalled).toBe(true);
});

test('Button does not delete initial element CSS classes', () => {
    const buttonNode = document.createElement('div');
    buttonNode.className = 'element';
    new Button(buttonNode, {});
    expect(buttonNode.classList.contains('element')).toBe(true);
});
