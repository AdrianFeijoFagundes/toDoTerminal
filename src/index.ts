import { FilaDeTarefas } from "./classes/FilaDeTarefas";
import { Tarefa } from "./classes/Tarefa";

import * as ask from "readline-sync";



function main(filaPrincipal: FilaDeTarefas, filaConcluidas: FilaDeTarefas): void {
    while(true) {
        const primeiraTarefa = filaPrincipal.primeiro()?.getDescricao() || 'Nenhuma tarefa cadastrada';
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
        let user = ask.questionInt('Deseja escolher qual opcao? ', {limit: [1, 2, 3, 4, 5], limitMessage: 'Digite 1, 2, 3, 4 ou 5.'});
 
        switch(user) {
            case 1:
                filaPrincipal.adicionar_tarefa(
                    new Tarefa(
                        ask.question("Qual a descricao da tarefa: ")
                    )
                );
                break
            case 2:  
                let tarefaConcluida = filaPrincipal.remover_tarefa()
                if (tarefaConcluida !== undefined) {
                    tarefaConcluida.mudarStatus()
                    filaConcluidas.adicionar_tarefa(tarefaConcluida)
                }
                ask.question('Pressione a tecla enter para prosseguir...', { hideEchoBack: true, mask: '' });
                break
            case 3:
                console.clear()
                console.log(`
                -----------------------------------------------
                                TAREFAS PENDENTES
                -----------------------------------------------
                `);
                (!filaPrincipal.estaVazia()) ? 
                    filaPrincipal.listar_tarefas() : 
                    console.log('Lista de tarefas pendentes vazia');

                ask.question('Pressione a tecla enter para prosseguir...', { hideEchoBack: true, mask: '' });
                break
            case 4:
                console.clear()
                console.log(`
                -----------------------------------------------
                                TAREFAS CONCLUIDAS
                -----------------------------------------------
                `);
                (!filaConcluidas.estaVazia()) ?
                    filaConcluidas.listar_tarefas()
                    : console.log('Lista de tarefas concluídas vazia');
                
                ask.question('Pressione a tecla enter para prosseguir...', { hideEchoBack: true, mask: '' });
                break
            case 5: 
            
                return
        }
    }
}
let filaDeTarefas = new FilaDeTarefas();
let filaConcluídas = new FilaDeTarefas();
main(filaDeTarefas, filaConcluídas)