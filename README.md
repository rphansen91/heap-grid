Heap Grid
=========

[![Demo](https://raw.githubusercontent.com/rphansen91/heap-grid/master/demo.jpg)](http://localhost:8000)

[Github](https://github.com/rphansen91/heap-grid)
[Demo](http://localhost:8000)

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