//flat
const array = [1,1,2,3,4,[1,3,5,6,[1,2,4]]];//Este método trasforma el array para tener todo dentro de un solo array
console.log(array.flat(3));

//flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));