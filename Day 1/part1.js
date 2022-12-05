const fs = require('fs');

let data = fs.readFileSync(`${__dirname}\\input.txt`, {encoding: 'utf-8'});

export let elfCalories = data    
    .split("\n\r")
    .map((elf) => (
        elf
            .trim()
            .split("\r\n")
            .map((calorie) => +calorie)
            .reduce((a,b) => a + b)    
    ));

let maxCalories = Math.max(...elfCalories);

console.log(maxCalories);