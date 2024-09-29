"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    constructor(descricao, status = "Pendente") {
        this.descricao = descricao;
        this.status = status;
    }
    getDescricao() { return this.descricao; }
    setDescricao(descricao) { this.descricao = descricao; }
    // substitui o "tarefa_pronta" pelo método "mudarStatus"
    mudarStatus() {
        this.status == "Pendente" ? this.status = "Concluído" : this.status = "Pendente";
    }
    toString() {
        return `   ${this.descricao.padEnd(40)}     | ${this.status.padEnd(10)}`;
    }
}
exports.Tarefa = Tarefa;
