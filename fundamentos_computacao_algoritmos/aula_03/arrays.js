//ARRAYS

//Formas de Declaração

//Forma 1
/*
let daysOfWeek = [] //{1}
console.log(daysOfWeek);

daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday' //{2}
];
console.log(daysOfWeek);

//Forma 2
let daysOfWeek2 = new Array(); //{1}
console.log(daysOfWeek2);

daysOfWeek2 = new Array(7); //{2}
console.log(daysOfWeek2);

daysOfWeek2 = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'); //{3}
console.log(daysOfWeek2);
*/
//Fibonacci
var fibonacci = []; //{1}
fibonacci[1] = 1; //{2}
fibonacci[2] = 1; //{3}

console.log('Processamento');
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; //{4}
}

console.log('Resultado');

fibonacci.forEach( x => {
    console.log(x);
})

//lenght - número de elementos
//push - adiciona elemento na última posição
//pop - remove o último elemento da lista
//shift - remove o primeiro elemento da lista
//unshift - adiciona o elemento na primeira posição da lista
//splice - adiciona valor em posição específica, permitindo remover outros
//slice - retorna uma copia do array
//at(pos) ou [pos] - retorna o elemento na posicao especificada por pos

//PILHA --> LIFO - PUSH E POP
//FILA --> FIFO - PUSH E SHIFT
    



