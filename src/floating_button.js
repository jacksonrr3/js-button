import { Button } from './button';

export class FloatingButton extends Button {

    constructor(node, options) {
        super(node, { text: 'Floating Button' });
                
        node.classList.add('floating-button');
        
        this.option(options);

        let isClicked = false;
        function onClickHandler() {
            if (!isClicked){
                for (const btn of this.buttons) {
                    this.node.append(btn.node);
                }
                isClicked = true;
            } else {
                for (const btn of this.buttons) {
                    btn.node.remove(); 
                }
                isClicked = false;
            }
        }

        super.option({
            onClick: onClickHandler.bind(this)
        });
    }

    option(options){
        super.option(options);
        if (options.hasOwnProperty('items')) {
            this.buttons = [];
            for (const btnOptions of options.items) {
                const btnNode = document.createElement('div');
                this.buttons.push(new Button(btnNode, btnOptions));
            }
        }
    }
}
