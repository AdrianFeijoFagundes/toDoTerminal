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
function main(filaPrincipal, filaConcluidas) {
    var _a;
    while (true) {
        const primeiraTarefa = ((_a = filaPrincipal.primeiro()) === null || _a === void 0 ? void 0 : _a.getDescricao()) || 'Nenhuma tarefa cadastrada';
        console.clear();
        console.log(`
                -----------------------------------------------
                                LISTA DE TAREFAS
                -----------------------------------------------
                Primeira tarefa:
                    ${primeiraTarefa}
                -----------------------------------------------
                Quantidade total de tarefas:  ${filaPrincipal.tamanho()}  
                - 1. Adicionar     
                - 2. Concluir Primeira Tarefa
                - 3. Listar Tarefas Pendentes
                - 4. Listar Tarefas Concluídas
                - 5. Sair
                -----------------------------------------------
        `);
        let user = ask.questionInt('Deseja escolher qual opcao? ');
        switch (user) {
            case 1:
                filaPrincipal.adicionar_tarefa(new Tarefa_1.Tarefa(ask.question("Qual a descricao da tarefa: ")));
                break;
            case 2:
                let tarefaConcluida = filaPrincipal.remover_tarefa();
                if (tarefaConcluida !== undefined) {
                    tarefaConcluida.mudarStatus();
                    filaConcluidas.adicionar_tarefa(tarefaConcluida);
                }
                ask.question(`...`);
                break;
            case 3:
                console.clear();
                console.log(`
                -----------------------------------------------
                                TAREFAS PENDENTES
                -----------------------------------------------
                `);
                !filaPrincipal.estaVazia() ? filaPrincipal.listar_tarefas() : console.log('Lista de tarefas pendentes vazia');
                ask.question(`...`);
                break;
            case 4:
                console.clear();
                console.log(`
                -----------------------------------------------
                                TAREFAS CONCLUIDAS
                -----------------------------------------------
                `);
                !filaConcluidas.estaVazia() ? filaConcluidas.listar_tarefas() : console.log('Lista de tarefas concluídas vazia');
                ask.question(`...`);
                break;
            case 5:
                return;
        }
    }
}
let filaDeTarefas = new FilaDeTarefas_1.FilaDeTarefas();
let filaConcluídas = new FilaDeTarefas_1.FilaDeTarefas();
main(filaDeTarefas, filaConcluídas);
