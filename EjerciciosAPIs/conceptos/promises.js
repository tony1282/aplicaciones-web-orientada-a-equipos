const miPromesa = new Promise((resolve, reject) => {
setTimeout(() => {
    const calif = Math.ceil(Math.random() * 10);
    if(calif >= 8)
       return resolve('si pasas');
    else 
        return reject('no pasas amigo');

}, 3000);
});

miPromesa
.then(result => console.log(result))
.catch(error => console.log(error));
