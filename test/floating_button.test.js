const FloatingButton = require('../src/floating_button.js').FloatingButton;

test('Create floatingButton', () => {
     const buttonNode = document.createElement('div');
     const buttonsOptions = [
         {
               text: 'Button1',
               onClick: () => {
                    alert('Button1');
               }
         },
         {
               text: 'Buttton2',
               onClick: () => {
                    alert('Button2');
               }
         }
     ];
     const floatingButton = new FloatingButton(buttonNode, buttonsOptions);
     expect(buttonNode.innerText).toBe('Floating Button');
});

test('Call child buttons clickHandlers', () => {
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

     const floatingButton = new FloatingButton(buttonNode, buttonsOptions);
     buttonNode.dispatchEvent(new Event('click'));
     
     const btn1 = buttonNode.querySelectorAll('button');
     console.log(btn1.length)

     // btn1.dispatchEvent(new Event('click'));

     //console.log(buttonNode)

     // const btn2 = buttonNode.querySelectorAll('.floating-button')[1];
     // btn2.dispatchEvent(new Event('click'));
     
     expect(isClicked1).toBe(true);
     expect(isClicked2).toBe(undefined);
});
