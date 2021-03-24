function button(node, options){  
    node.innerText = options.text;
    node.className = 'button';
    node.addEventListener('click', options.onClick);
}

exports.button = button;
