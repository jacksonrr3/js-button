import { FloatingButton } from '../src/floating_button';

test('FloatingButton correctly displays "text" option', () => {
     const buttonNode = document.createElement('div');
     new FloatingButton(buttonNode, {});
     expect(buttonNode.innerText).toBe('Floating Button');
});

test('FloatingButton adds class "floating-button" to an element', () => {
     const buttonNode = document.createElement('div');
     new FloatingButton(buttonNode, {});
     expect(buttonNode.classList.contains('floating-button')).toBe(true);
});

test('Child buttons undefined before FloatingButton is clicked', () => {
     const buttonNode = document.createElement('div');
     
     const buttonsOptions = {
          items: [
               { text: 'Button1' }
          ]
     };

     new FloatingButton(buttonNode, buttonsOptions);
     const button1 = buttonNode.querySelectorAll('.button')[0];

     expect(button1).toBe(undefined);
});

test('Child button element is clickable after floatingbutton element is clicked', () => {
     const buttonNode = document.createElement('div');
     
     let isClicked1;

     const clickHandler1 = function() {
          isClicked1 = true;
     };

     const buttonsOptions = {
          items: [
               {
                    text: 'Button1',
                    onClick: clickHandler1,
               }
          ]
     };

     new FloatingButton(buttonNode, buttonsOptions);
     
     buttonNode.dispatchEvent(new Event('click'));
     
     const button1 = buttonNode.querySelectorAll('.button')[0];
     button1.dispatchEvent(new Event('click'));

     expect(isClicked1).toBe(true);
});

test('Child buttons become unavailable after "onclick" event on one of the child buttons', () => {
     const buttonNode = document.createElement('div');
     
     let isClicked1;

     const clickHandler1 = function() {
          isClicked1 = true;
     };

     const buttonsOptions = {
          items: [
               {
                    text: 'Button1',
                    onClick: clickHandler1,
               }
          ]
     };

     new FloatingButton(buttonNode, buttonsOptions);
     buttonNode.dispatchEvent(new Event('click'));

     let button1 = buttonNode.querySelectorAll('.button')[0];
     button1.dispatchEvent(new Event('click'));

     buttonNode.dispatchEvent(new Event('click'));
     button1 = buttonNode.querySelectorAll('.button')[0];
     
     expect(button1).toBe(undefined);
});
