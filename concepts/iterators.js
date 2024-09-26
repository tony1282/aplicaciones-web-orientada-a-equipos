// high order function 
// son funciones que reciben funciones como 
//parametros 

const suma = (a,b) => a+b;
const resta =(a,b) => a-b;

const operations = (a,b,callback) => {
    const result = callback(a, b);
    console.log('el resultado es:' + result)

}

operations(12, 5, suma);
operations(12,5, resta);
operations(12,5,(a,b) => a*b);

const cars = ['vocho', 'athos' , 'pointer' , 'tsuru', 'bmv'];

cars.forEach((car) => { console.log(car) });

let filtrados = cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados = cars.filter(car => car.includes('o'));
console.log(filtrados);

//regresar los que comiencen con a
filtrados = cars.filter(car => car.startsWith('a'));
console.log(filtrados);
//regresar los que comiencen con u
filtrados = cars.filter(car => car.endsWith('u'));
console.log(filtrados);
//regresar los que tengan menos de 5 letras
filtrados = cars.filter(car => car.length < 5);
console.log(filtrados);



//metodo map
const CARS = cars.map(car => car.toUpperCase());
console.log(cars);
console.log(CARS);

const reves = cars.map(car => car.split('').reverse().join(''));
console.log(reves);


function wrapping(gifts){
    return gifts.map(gift => {
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${ tapa } \n*${ gift}*\n${ tapa }`;
        return g
    })
    

}

const  carsEnvueltos = wrapping(cars);
carsEnvueltos.forEach(car => console.log(car));

const numbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];

const sumatoria = numbers.reduce((a, b) => a+b);
console.log(numbers);
console.log(sumatoria);
const factorial = numbers.reduce((a ,b) => a * b);
console.log(factorial);

//every regresa verdadero si todos cumplen
const ages = [23 , 14, 37, 19, 18, 22, 27];
const olders = ages.every(age => age >= 18);
const youngers = ages.every(age => age <18);
console.log(olders);
console.log(youngers);
//some regresa verdadero con uno que cumpla
const olders2 = ages.some(age => age >= 18);
const youngers2 = ages.some(age => age <18);
console.log(olders2);
console.log(youngers2);
//crear un array con elementos del 1 al 10 con map y filter 
const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(elements)
//crear uno nuevo con los cuadrados
const cuadrado = elements.map( cua => cua ** 2);
console.log(cuadrado);

//crear uno nuevo con los cubos
const cubo = elements.map( cua => cua ** 3);
console.log(cubo);
//crear uno nuevo con las mitades
const mitad = elements.map( cua => cua / 2);
console.log(mitad);
//crear uno nuevo con los pares
let pares = elements.filter(pa => pa % 2 === 0);
console.log(pares);
//crear uno nuevo con los impares
let impares = elements.filter(pa => pa % 2 !== 0);
console.log(impares);
//crear uno nuevo con valores entre 3 y 8
let rango = elements.filter(va => va >= 3 && va <= 8);
console.log(rango);