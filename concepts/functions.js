// funciones y funciones de flecha

//  function  nameFunction(params){
//  body 
//  return

// }

//Arrow Function
//const nameFunction (params) => {
//  body
//  return
//}

function sayHello(){
    console.log('hello');

}

sayHello();

const sayHelloInSpanish = () => console.log('hola');
sayHelloInSpanish();

function sayHelloto1(name) {
    console.log('Hello' +name)
}
sayHelloto1('goku');

const sayHelloTo = name => console.log(`Hello ${name}`);
sayHelloTo('santynaco');

function fullName (name, lastname){
    consolole.log(`${ name } ${ lastname }`);

}

fullName('Bruce', 'Wayne');

const fullName2 = (name, lastname) => console.log(`${name} ${lastname}`);

fullName2('clark', 'kent');

function duplicateNumber (number){
    return number * 2;

}

let duplicate = duplicateNumber(5);
console.log(duplicate);

const halfNumber = number => number /2;
let half = halfNumber(10);
console.log(half)

//parametros opcionales
function greetings (name = 'invitado'){
    console.log(` hola ${ name }`);
}

greetings('batman');
greetings();
const greetings2 = (name = 'invitado ') => console.log(`hola ${name}`);
greetings2();