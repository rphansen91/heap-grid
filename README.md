Heap Grid
=========

[![Demo](https://rphansen91.github.io/heap-grid/demo.jpg)](https://rphansen91.github.io/heap-grid/)

[Github](https://github.com/rphansen91/heap-grid)
[Demo](https://rphansen91.github.io/heap-grid/)

Description
------------

Randomly position elements based on heap permutations

Installation
------------

```
npm install heap-grid
```

Usage
-----

```js
import HeapGrid from 'heap-grid';

var gridEl = document.getElementById('grid');
var grid = new HeapGrid(gridEl, { size: 250 });

var elements = [] // GRID ELEMENTS;
                
for (var i = 0; i < elements.length; i++) {
    var style = grid.place();
    for (var s of style) {
        elements[i].style[s] = style[s];
    }
}
```