import { Tarefa } from "./Tarefa";

export class FilaDeTarefas {
    private lista : Tarefa[] = []
    
    public adicionar_tarefa(tarefa: Tarefa): void{
        this.lista.push(tarefa);
    }


    public remover_tarefa(): Tarefa | undefined{
        if (this.estaVazia()){
            console.log("A fila está vazia");
            return undefined;
        } else {
            return this.lista.shift();
        }
    }

    public listar_tarefas(){
        for (let tarefa of this.lista) {
            console.log(`              ${tarefa.toString()}`)
        }
    }

    //retornar o primeiro elemento
    public primeiro(): Tarefa | undefined{
        if (this.estaVazia()){
            console.log("A fila está vazia");
            return undefined;
        } else {
            return this.lista[0];
        }
    }

    // substitui o "tarefa_pronta" pelo método "mudarStatus"
    public mudarStatus(): string | undefined {    
        this.primeiro()?.getStatus() == "Pendente" ? this.primeiro()?.setStatus("Concluído") : this.primeiro()?.setStatus("Pendente");
        return this.primeiro()?.getStatus();
    }

    //metodo isEmpty
    public estaVazia(): boolean {
        return this.lista.length === 0    
    }
    
    //metodo size
    public tamanho(): number{
        return this.lista.length
    }
}