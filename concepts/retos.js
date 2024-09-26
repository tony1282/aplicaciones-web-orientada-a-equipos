function wrapping(gifts){
    const envueltos = [];
    for(let gift of gifts){
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${ tapa }\n*${ gift }*\n${ tapa }`;
        envueltos.push(g);
    }
        
    return envueltos;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped[1])



function createCube(size) {
    const faceA = '/\\';   
    const backA = '_\\';   
    const faceB = '\\/';  
    const backB = '_/';    
    
    let cubeA = '';        
    let cubeB = '';        
    
    for (let i = 0; i < size; i++) {
        let line = ' '.repeat(size - i - 1);   
        line += faceA.repeat(i + 1);           
        line += backA.repeat(size);            
        cubeA += line + '\n';                  
    }

   
    for (let i = 0; i < size; i++) {
        let line = ' '.repeat(i);              
        line += faceB.repeat(size - i);        
        line += backB.repeat(size);            
        cubeB += line + '\n';                  
    }

    return cubeA + cubeB; 
}

const cube = createCube(3);
console.log(cube);

