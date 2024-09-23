const myArray = new Array (1, 2, 3, 4, 5);
console.log(myArray);
const otherArray = [1, 2, 3, 4, 5];
console.log(otherArray)
console.log(myArray[0])
console.log(myArray[4])
myArray[2] = 'dos';
myArray[3] = true;
myArray[3] = 2.4;
console.log(myArray);

console.log(otherArray.length);

// metodos para insertar y extraer valores 
// insertar al final push;
// insertar al inicio unshift;
// extrater al final pop;
// extraer al inicio shift;


const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

const queue = [];
queue.push(1);


queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue);
queue.shift();
queue.shift();
queue.shift();
console.log(queue);


const numbers = [12, 4, 23, -1, 3, 99];
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers.sort())

const myName = 'Antony de la Cruz';
const letters = myName.split('');
console.log(letters.reverse().join(''));
console.log(letters.sort());


// Iterar Arrays 
const pairs = [2, 4, 6, 8, 10, 12];

//ciclo for 
for (let i = 0; i < pairs.length; i++){
    console.log(`elemento ${ i }: ${ pairs[i] }`);

}

// ciclo for of
for (let pair of pairs){
    console.log(pair);
}