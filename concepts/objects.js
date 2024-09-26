const tsuru = {
    model: 2000, 
    color: 'verde',
    kilometers: 20000,
    engine: '2.0 litros'

}

console.log(tsuru);
console.log(tsuru.model);
console.log(tsuru.color);

tsuru.engine = '4.0 litros'

console.log(tsuru);

tsuru.collitions = 5;

console.log(tsuru);
// esto es para espacios
tsuru['numero placas'] = 'XD 666 X'
console.log(tsuru);
// se puede con punto o usar esta sintaxis
tsuru.services = [2005, 2010, 2015, 2020];
console.log(tsuru['services']);

//metodos
tsuru.start = function(){
    console.log('Revision de sistema');
    console.log('Revision de niveles');
    console.log('GRRRRRRRRRRRRRRRRR:');
    console.log('R!');
    console.log('R!');
    console.log('R!');
    this.status = 'Ensendido';

    
}

tsuru.start();
console.log(tsuru.status);

tsuru['turn off'] = function(){
    console.log('apagandose...')
    this.status = 'apagado';
    console.log(this.status);
}

tsuru['turn off']();

delete tsuru['numero placas'];
console.log(tsuru)