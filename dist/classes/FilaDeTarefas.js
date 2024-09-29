"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeTarefas = void 0;
class FilaDeTarefas {
    constructor() {
        this.lista = [];
    }
    adicionar_tarefa(tarefa) {
        this.lista.push(tarefa);
    }
    remover_tarefa() {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
            return undefined;
        }
        else {
            return this.lista.shift();
        }
    }
    listar_tarefas() {
        for (let tarefa of this.lista) {
            console.log(`             ${tarefa.toString()}`);
        }
    }
    //retornar o primeiro elemento
    primeiro() {
        if (this.estaVazia()) {
            console.log("A fila está vazia");
            return undefined;
        }
        else {
            return this.lista[0];
        }
    }
    //metodo isEmpty
    estaVazia() {
        return this.lista.length === 0;
    }
    //metodo size
    tamanho() {
        return this.lista.length;
    }
}
exports.FilaDeTarefas = FilaDeTarefas;
