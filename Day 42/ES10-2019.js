//array flat

const arr = [1, 2, [3, 4], [[5, [33, 4], 55], [6, 55, 4], 7]];
console.log(arr.flat());
// [ 1, 2, 3, 4, [ 5, [ 33, 4 ], 55 ], [ 6, 55, 4 ], 7 ]

console.log(arr.flat(2));
// [1, 2, 3, 4, 5, [33, 4], 55, 6, 55, 4, 7];

console.log(arr.flat(Infinity));
// [ 1, 2,  3, 4,  5, 33, 4, 55, 6, 55, 4, 7]

//array flatmap

const arr2 = [1, 2, [3, 4], [[5, [33, 4], 55], [6, 55, 4], 7]];

console.log(arr2.flatMap((value) => [value, value * 2]));
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 33, 66, 55, 110, 6, 110, 55, 110, 7
