//Comandos de Repetição
// for - definição de 3 partes - quantidade definida
// while - enquanto condição for verdadeira
// do while - executa pelo menos 1 vez

//Comandos de Seleção
// if else
// switch case
// ternário - condição ? verdadeiro : falso

//Funções

//Operadores
//Operadores Aritméticos (+, -, *, /, %)
//Operadores de Incremento e Decremento (++,--)
//Operadores Relacionais (==, !=, <=,=>,>)
//Operadores Lógicos (&&, ||)

function avaliaParidade(limiteSuperior){
    for(let i=0; i<limiteSuperior; i++){
        if(i%2==1) {
            console.log(i + ' é um número impar!')
        } else {
            console.log(i + ' é um número par!')
        }
    }
}

avaliaParidade(10);