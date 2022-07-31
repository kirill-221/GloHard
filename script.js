let num = 266219;

let result = 1;
num.toString()
    .split('')
    .forEach((elem) => (result *= elem));
console.log('num: ', result);

let construction = result ** 3;
console.log(construction);
console.log(construction.toString().substring(0, 2));
