//Lista Encadeada
//Nodo -> element / next

/*
    métodos suportados:
    add(e) - insere no final da lista
    add(index, e) - insere em uma posição específica
    get(index) / set(index) - faz o get/set em determinada posição
    remove(e) - remove o elemento da lista
    isEmpty() - retorna true se a lista está vazia
    size() - retorna a quantidade de elementos armazenados na lista
    contains(e) - retorna true se a lista contém o elemento
    indexOf(e) - retorna a posição do elemento na lista
    clear() - remove todos os elementos da lista

    //Referência - github Loiane - javascript-datastructures-algorithms

*/

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.header = null;
        this.tail = null;
    }
    add(element){
        if (this.count == 0){
            this.header=this.tail=element;
        } else {
            this.tail.next = element;
            this.tail = element;
        }
        this.count++;
    }
    print(){
        var aux = this.header;
        while (aux!=null) {
            console.log(aux.element);
            aux=aux.next;
        }
    }
}

var myLinkedList = new LinkedList();

myLinkedList.add(new Node(1));
myLinkedList.print();

myLinkedList.add(new Node(2));
myLinkedList.print();

myLinkedList.add(new Node(4));
myLinkedList.print();

myLinkedList.add(new Node(3));
myLinkedList.print();