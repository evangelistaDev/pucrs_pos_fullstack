//CONJUNTOS (SET)
//Não permite dados duplicados

var mySet = new Set();

mySet.add(0);
console.log(mySet);
console.log('--------');

mySet.add(1);
console.log(mySet);
console.log('--------');

mySet.add(1);
console.log(mySet);
console.log('--------');

mySet.add(2);
console.log(mySet);
console.log('--------');

mySet.add(2);
console.log(mySet);
console.log('--------');

mySet.add(3);
console.log(mySet);
console.log('--------');

//MAP
//Chave Valor
//Chaves não se repetem
//Valores podem ser duplicados

const contato = new Map();
contato.set('Alexandre',{tel: "123456", end:"Rua X"});
console.log(contato);
console.log(contato.has('Alexandre'));
contato.set('Vanessa',{tel: "987412", end:"Rua Y"});
contato.set('Alexandre',{tel: "10111", end:"Rua Z"});
console.log(contato.size);
console.log(contato);
console.log(contato.has('Vanessa'));
console.log(contato.has('Ana'));
contato.delete('Alexandre');
console.log(contato);
console.log(contato.size);


const myMap = new Map();
myMap.set(0, 'Zero');
myMap.set(1, 'Um');

for (const [key, value] of myMap) {
    console.log(key + ' - ' + value);
}

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

for (const [key, value] of myMap.entries()) {
    console.log(key + ' - ' + value);
}
