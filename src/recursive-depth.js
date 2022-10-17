const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    result = 1;

    calculateDepth(arr) {
        if (arr.filter((i) => i.constructor.name === "Array").length === 0) {
            return 1
        }

        this.result = 1 + this.calculateDepth([].concat(...arr.filter((item) => {
            return item.constructor.name === "Array"
        })))
        return this.result
    }
}

module.exports = {
    DepthCalculator
};
