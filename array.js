// Array
const fruits =['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

// find Orange array.find()
const result = fruits.find((f) => f === 'Orange' || f === 'Mango');
const result1 = fruits.findIndex((f) => f === 'Orange' || f === 'Mango');
// console.log(result1);

// filter() Method
const filter = fruits.filter((f) => f === 'Lemon' || f === 'Apple');
// console.log('filter',filter);

// slice()
const slice = fruits.slice(1, 4);
// console.log('slice',slice)

// splice();
// const splice = fruits.slice(idx, noOffRemoveItem)
const splice = fruits.splice(2, 2, 'PineApple', 'Jolpai');
// console.log('splice', splice);
// console.log(fruits)


// concat method
const concat = fruits.concat(['fruit1', 'fruit2']);
console.log(concat);
console.log(fruits)