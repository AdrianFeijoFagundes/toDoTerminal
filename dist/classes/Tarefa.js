"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    constructor(descricao, status = "Pendente") {
        this.descricao = descricao;
        this.status = status;
    }
    getDescricao() { return this.descricao; }
    getStatus() { return this.status; }
    setDescricao(descricao) { this.descricao = descricao; }
    setStatus(status) { this.status = status; }
    toString() {
        return `   ${this.descricao.padEnd(25)}     |      ${this.status.padEnd(10)}`;
    }
}
exports.Tarefa = Tarefa;
