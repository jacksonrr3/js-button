# js-button

## How to install

`npm install js-button` 

## How to use

Using script tags
```
<script src="node_modules/js-button/dist/main.js"></script>
<script>
  const button = new jsButton.Button(node, {
    text: 'some text',
    onClick: () => {})
  });
</script>
```

Using module 
```
const Button = require('js-button/src/button.js').Button;

const button = new Button(node, { 
    text: 'some text',
    onClick: () => {}
});
```

## Roadmap
- ~~runtime option changing~~
- ~~rename main.js (config webpack)~~
- ~~add CI task (github actions task)~~
- floating button (add option "items actions")
- provide CSS
- ~~migrate ES6 modules~~