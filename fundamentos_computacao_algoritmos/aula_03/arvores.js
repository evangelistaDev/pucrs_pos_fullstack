//Árvores
//Estruturas de dados não lineares
/*
Grau - Número de sub-árvores
Nível de um nodo - número de linhas que liga o nodo à raiz, raiz é o nível zero
Altura - o nível mais alto da árvore

Métodos
root() - retorna a raiz da árvore
parent(v) - retorna o nodo pai de v, ocorrendo um erro se for raiz
children(v) - retorna os filhos do nodo v
Métodos de consulta
isInternal(v) - testa se um nodo v é interno
isExternal(v) - testa se um nodo v é externo
isRoot(v) - testa se o nodo v é raiz
size() - retorna o número de nodos na árvore
isEmpty() - testa se a árvore está vazia
positions() - retorna uma coleção com todos os nodos da árvore
replaceElement(v,e) - retorna o elemento em v e substitui por e

Representação em memória
- Por contiguidade - espaço comum de memória
- Por encadeamento - diferentes espaços em memória

Árvore Binária
- Máximo de dois filhos
- Filho da Esquerda e Filho da Direita
- Filho da Esquerda precede o filho da Direita

Árvore Binária própria
- Cada nodo tem 0 ou 2 filhos
- Cada nodo conterá a informação, referência do nodo pai, ref da subarvore direita e ref da subarvore esquerda

Métodos
- boolean addRoot(element) - retorna falso se a árvore não está vazia, senão insere o elemento como raiz
- boolean addLeft(element, father) - insere o elemento a esquerda como filho de father
- boolean addRight(element, father) - insere o elemento a direita como filho de father
- boolean hasRight(element) - retorna true se possui subarvores a direita
- boolean hasLeft(element) - retorna true se possui subarvores a esquerda
- boolean removeBranch(element) - remove o elemento e seus filhos
- void clear() - remove todo os elementos
- int size() - retorna o número de elementos da árvore
- setRoot(element) - altera o elemento raiz

Percurso em Profundidade
Visita a raiz -> percorre subarvore esquerda -> subarvore direita
- LinkedListOfInteger positionsPre() - retorna uma lista com todos os elementos da árvore na ordem pré fixada

Percorre subarvore esquerda -> visita raiz -> percorre subarvore direita
- LinkedListOfInteger positionsCentral() - retorna uma lista com todos os elementos da árvore na ordem central

Percorre subarvore esquerda -> subarvore direita -> raiz
- LinkedListOfInteger positionsPos() - retorna uma lista com todos os elementos da árvore na ordem pós fixada

Percurso em Largura
- Visita os nodos de nivel 0 -> 1 -> 2 .....
- LinkedListOfInteger positionsWidth() - retorna uma lista com todos os elementos da árvore com caminhamento em largura

Referências - Github
Loiane - binary-search-tree.js
Adrian Meija - binary-tree-node.js

*/

//Recursão
//Fatorial sem Recursividade
function fatorial(number){
    if(number < 0){
        return undefined
    } else {
        let total = 1;
        for (let n = number; n > 1; n--){
            console.log(n + ' * ' + total + ' = ' + total * n);
            total = total * n
        }
        return total;
    }
}
console.log(fatorial(5));

//Fatorial com Recursão
function fatorialRecursivo(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * fatorialRecursivo(n - 1);
    }
}
console.log(fatorialRecursivo(5));