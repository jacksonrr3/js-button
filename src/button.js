/*
function button(node, options){  
    node.innerText = options.text;
    node.className = 'button';
    node.addEventListener('click', options.onClick);
}*/

class Button {
    constructor(node, options){
        this.node = node;
        this.node.innerText = options.text;
        this.node.className = 'button';
        this.node.addEventListener('click', options.onClick);
    }

    //funct option(obj option // опци поля объекта текст/онклик){}
}

exports.Button = Button;
