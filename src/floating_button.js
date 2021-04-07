import { Button } from './button';

export class FloatingButton extends Button {

    constructor(node, buttonsOptions) {
        super(node, {text: 'Floating Button'});
        
        const buttons = [];
        let notClicked = true;
        node.classList.add('floating-button');
        
        for (const options of buttonsOptions){
            const btnNode = document.createElement('div');
            buttons.push(new Button(btnNode, options));
        }
        
        function onClickHandler() {
            if (notClicked){
                for (const btn of buttons) {
                    this.node.append(btn.node);
                }
                notClicked = false;
            } else {
                for (const btn of buttons) {
                    btn.node.remove(); 
                }
                notClicked = true;
            }
        }

        this.option({
            onClick: onClickHandler.bind(this)
        });
    }

    // option(object){}    to do
}
