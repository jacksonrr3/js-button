# js-button

## How to install

`npm install js-button` 

## How to use

Using script tags
```
<script src="node_modules/js-button/dist/main.js"></script>
<script>
  jsButton.button(node, {
    text: 'some text',
    onClick: () => {})
  });
</script>
```

Using module 
```
const button = require('js-button/src/button.js').button;

button(node, { 
    text: 'some text',
    onClick: () => {}
});
```

## Roadmap
- runtime option changing
- rename main.js (config webpack)
- add CI task (github actions task)
- floating button (add option "items actions")
- provide CSS
- migrate ES6 modules