module.exports = class Grid {

    constructor (rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.build();
    }

    build () {
        this.grid = [];
        for (var r = 0; r < this.rows; r++) {
            this.grid.push([]);
            for (var c = 0; c < this.columns; c++) {
                this.grid[r].push(true);
            }
        }
    }

    log () {
        var gridStr = this.grid.map(r => 
            r.map(rc => '| ' + (rc ? ' ': 'X') + ' |')
            .join('')
        ).join('\n');
        console.log(gridStr);
    }

    available (r, c, x, y) {
        var _this = this;
        var isAvailable = true;

        function spotAvailable (ry,cx) {
            if (typeof _this.grid[ry] !== 'object') return false;
            if (typeof _this.grid[ry][cx] !== 'boolean') return false;
            return _this.grid[ry][cx];
        }

        for (var cx = c; cx < c + x; cx++) {
            for (var ry = r; ry < r + y; ry++) {
                if (!spotAvailable(ry,cx)) {
                    isAvailable = false;
                }
            }
        }

        return isAvailable
    }

    block (r, c, x, y) {
        for (var cx = c; cx < c + x; cx++) {
            for (var ry = r; ry < r + y; ry++) {
                this.grid[ry][cx] = false;
            }
        }
    }

    find (x, y) {
        for (var c = 0; c < this.columns; c++) {
            for (var r = 0; r < this.rows; r++) {
                if (this.available(r, c, x, y)) {
                    this.block(r, c, x, y);
                    return {
                        row: r,
                        column: c
                    }
                }
            }
        }
    }
}