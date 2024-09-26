"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilaDeTarefas_1 = require("./classes/FilaDeTarefas");
const Tarefa_1 = require("./classes/Tarefa");
const ask = __importStar(require("readline-sync"));
function main(fila) {
    while (true) {
        let checkEmpty = fila.estaVazia() ? "Yes" : "No";
        console.clear();
        fila.listar_tarefas();
        console.log(`
                -----------------------------------------------
                Quantidade total de tarefas:  ${fila.tamanho()}  
                - 1. Adicionar     
                - 2. Concluir Primeira Tarefa
                - . Sair
                -----------------------------------------------
        `);
        let user = ask.questionInt('Qual desejas? ');
        switch (user) {
            case 1:
                fila.adicionar_tarefa(new Tarefa_1.Tarefa(ask.question("Qual a descrição da tarefa")));
                ask.question("...");
                break;
            case 2:
                ask.question(`...`);
                break;
            case 3:
                return;
        }
    }
}
let filaDeTarefas = new FilaDeTarefas_1.FilaDeTarefas();
main(filaDeTarefas);
