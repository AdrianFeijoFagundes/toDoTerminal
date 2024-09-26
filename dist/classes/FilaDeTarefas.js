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
            console.log(`              ${tarefa.toString()}`);
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
    // substitui o "tarefa_pronta" pelo método "mudarStatus"
    mudarStatus() {
        var _a, _b, _c, _d;
        ((_a = this.primeiro()) === null || _a === void 0 ? void 0 : _a.getStatus()) == "Pendente" ? (_b = this.primeiro()) === null || _b === void 0 ? void 0 : _b.setStatus("Concluído") : (_c = this.primeiro()) === null || _c === void 0 ? void 0 : _c.setStatus("Pendente");
        return (_d = this.primeiro()) === null || _d === void 0 ? void 0 : _d.getStatus();
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
