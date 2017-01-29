const Grid = require('./grid');
const gridType = require('./select');
const GROUP_LENGTH = 6;

class Groups {
    constructor (size, width) {
        this.size = size;
        this.groupSize = size * 2;
        this.maxWidth = width;
        this.groups = {};
    }

    create () {
        var grid = new Grid(4,4);
        var type = gridType();
        return type.map((c, i) =>  {
            var styles = {};
            var x = c[0];
            var y = c[1];
            styles.width = x === 1 ? this.size / 2 : this.size;
            styles.height = y === 1 ? this.size / 2 : this.size;
            var rc = grid.find(x, y);
            styles.top = rc.row * (this.size / 2);
            styles.left = rc.column * (this.size / 2);
            return styles;
        });
    }

    place (i) {
        var group = Math.floor(i / GROUP_LENGTH);
        var index = i % GROUP_LENGTH;

        if (!this.groups[group] && !this.groups[group - 1]) {
            this.groups[group] = {};
            this.groups[group].items = this.create();
            this.groups[group].top = 0;
            this.groups[group].left = 0;
        }

        if (!this.groups[group]) {
            this.groups[group] = {}
            this.groups[group].items = this.create();
            this.groups[group].top = this.groups[group - 1].top;
            this.groups[group].left = this.groups[group - 1].left + this.groupSize;
            if (this.groups[group].left + this.groupSize > this.maxWidth) {
                this.groups[group].top = this.groups[group - 1].top + this.groupSize;
                this.groups[group].left = 0;
            }
        }

        var place = this.groups[group].items[index];

        return {
            top: this.groups[group].top + place.top,
            left: this.groups[group].left + place.left,
            width: place.width,
            height: place.height
        }
    }
}



module.exports = class Pin {

    constructor (element, opts) {
        opts = opts || {};
        this.element = element;
        this.size = opts.size || 250;
        this.groupSize = this.size * 2;
        this.limit = opts.limit;
        this.reset();
    }

    reset () {
        this.rect = this.element.getBoundingClientRect();
        this.groups = new Groups(this.size, this.rect.width);
        this.pinned = 0;
    }

    place () {
        return this.groups.place(this.pinned++);
    }
}

