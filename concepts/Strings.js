let name = "Antony"
let city = 'Huamantla';
let message = "hello, im "  + name + "and im from" + city;
console.log(message)
message = 'Hello, I\'m' + name + 'and I\'m from ' + city;
console.log(message);

// Templaate literals
message= `Hello, I'm ${ name } and I'm from ${ city }`;

console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));