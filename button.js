function button(node, value){  
    node.innerText = value.text;
    node.className = 'button';
    node.addEventListener('click', value.handler);
}

exports.button = button;
