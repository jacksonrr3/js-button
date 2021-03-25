export class Button {
    constructor(node, options){
        this.node = node;
        this.node.innerText = options.text;
        this.node.className = 'button';
        this.onClick = options.onClick;
        this.node.addEventListener('click', this.onClick);
    }

    option(options){
        if (options.hasOwnProperty('text')){
            this.node.innerText = options.text;
        }
        if (options.hasOwnProperty('onClick')){
            this.node.removeEventListener('click', this.onClick);
            this.onClick = options.onClick;
            this.node.addEventListener('click', this.onClick);
        }
    }
}
