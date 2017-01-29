const Grid = require('./grid');
const permutator = require('./utils/permutator');
const random = require('./utils/random');
const big = [2,2];
const wide = [2,1];
const tall = [1,2];

var validGrids = (function gridPermutations () {
    var success = [];
    var invalid = 0;
    var tests = permutator([big,big,wide,wide,tall,tall]);

    tests.map(function (test) {
        try {
            var g = new Grid(4,4);
            test.map(function (sizes) {
                return g.find(sizes[0], sizes[1]);
            }).map(function (rc) {
                return rc.row && rc.column;
            });
            success.push(test);
        } catch (err) {
            ++invalid;
        }
    })

    console.log({
        success: success,
        invalid: invalid
    });

    return success;
})();

module.exports = () => random(validGrids);