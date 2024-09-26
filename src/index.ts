import { FilaDeTarefas } from "./classes/FilaDeTarefas";
import { Tarefa } from "./classes/Tarefa";

import * as ask from "readline-sync";




function main(fila: FilaDeTarefas): void {
    while(true) {
        let checkEmpty = fila.estaVazia() ? "Yes" : "No"
        console.clear()
        fila.listar_tarefas()
        console.log(`
                -----------------------------------------------
                Quantidade total de tarefas:  ${fila.tamanho()}  
                - 1. Adicionar     
                - 2. Concluir Primeira Tarefa
                - . Sair
                -----------------------------------------------
        `)
        let user = ask.questionInt('Qual desejas? ')
 
        switch(user) {
            case 1:
                fila.adicionar_tarefa(
                    new Tarefa(
                        ask.question("Qual a descrição da tarefa")
                    )
                )
                ask.question("...")
                break
            case 2:  

                ask.question(`...`)
                break
            case 3:
                return

        }
    }
}
let filaDeTarefas = new FilaDeTarefas()
main(filaDeTarefas)