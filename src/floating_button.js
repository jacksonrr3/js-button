const Button = require('./button.js').Button;

class FloatingButton extends Button {

    constructor(node, buttonsOptions) {
        super(node, {});
        this.buttonsOptions = buttonsOptions;
        this.buttons = [];
        this.notClicked = true;

        for (const options of buttonsOptions){
            const btnNode = document.createElement('div');
            btnNode.classList.add = 'floating-button';
            this.buttons.push(new Button(btnNode, options));
        }
        
        function onClickHandler() {
            if (this.notClicked){
                for (const btn of this.buttons) {
                    this.node.append(btn.node);
                }
                this.notClicked = false;
            } else {
                for (const btn of this.buttons) {
                    btn.node.remove(); 
                    console.log('node removed');       
                }
                this.notClicked = true;
            }
        }

        this.option({
            text: 'Floating Button',
            onClick: onClickHandler.bind(this)
        });
    }

    // option(object){}    to do
}

exports.FloatingButton = FloatingButton;
