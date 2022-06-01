//"use strict";

// 1. Solo usando destructuración, obtenga las variables innerA e innerB con sus respectivos valores.

const elems = [{ inner: "not this " }, { innerA: "hola", innerB: "mundo" }];

console.log(elems[0]);
console.log(elems[1]);

const {innerA, innerB} = elems[1];

console.log(innerA, innerB);



// 2. Usando Set y arrays, encuentre los valores no repetidos entre estos items 1, 2, 3, 4, 1, 3, 5, 7, 8

const array1 = [1, 2, 3, 4, 1, 3, 5, 7, 8];

const uniqueValues = [...new Set(array1)];

console.log(uniqueValues);



// 3. Usando solo el operador rest, obtenga las siguientes variables y su respectivo contenido

let restTest = {
  propA: "hola",
  propB: "mundo",
  propC: { foo: 0, bar: 1, baz: 2 },
};

const { propA } = { ...restTest };
const rest1 = propA;


const { propC : {bar, baz}  } = {...restTest}

const rest2 = bar +  ' ' + baz;


console.log(rest1);
console.log(rest2);



// 4. Refactorice las siguientes funciones a ES6 usando arrow function, default parameters y operador ternario

const fn1 = (paramA = 1, paramB = 1) => paramA + paramB;

const fn2 = ((paramA = 1, paramB = 1) => {

  const innerParam = paramB || 10;

  return paramA - innerParam;
  
});

const fn3 = ((paramA = 2) => typeof paramA === 'string' ? 0 : paramA * paramA);

console.log(fn1(4, 4));
console.log(fn2());
console.log(fn3());