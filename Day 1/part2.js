let { elfCalories } = require('./part1');

let sum = 0;
let currentMax = Infinity;
for (let i = 0; i < 3; i++) {
    let maxCalories = findMaxWithinBound(elfCalories, currentMax);
    currentMax = maxCalories;
    sum += maxCalories;
}

console.log(sum);

function findMaxWithinBound(array, upperBound) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max && array[i] < upperBound) {
            max = array[i];
        }
    }

    return max;
}