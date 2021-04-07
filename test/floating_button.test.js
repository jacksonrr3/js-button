import { FloatingButton } from '../src/floating_button';

test('FloatingButton correctly displays "text" option', () => {
     const buttonNode = document.createElement('div');
     new FloatingButton(buttonNode, []);
     expect(buttonNode.innerText).toBe('Floating Button');
});

test('onClick handler is called after "child" button element is clicked', () => {
     const buttonNode = document.createElement('div');
     let isClicked1;
     let isClicked2;

     const clickHandler1 = function() {
          console.log('clickHandler1')
          isClicked1 = true;
     };
     const clickHandler2 = function() {
          console.log('clickHandler2')
          isClicked2 = true;
     };

     const buttonsOptions = [
          {
               text: 'Button1',
               onClick: clickHandler1,
          }, 
          {
               text: 'Buttton2',
               onClick: clickHandler2
          }
     ];

     new FloatingButton(buttonNode, buttonsOptions);
     buttonNode.dispatchEvent(new Event('click'));
     
     const btn1 = buttonNode.querySelectorAll('.button')[0];
     btn1.dispatchEvent(new Event('click'));

     expect(isClicked1).toBe(true);
     expect(isClicked2).toBe(undefined);
});
