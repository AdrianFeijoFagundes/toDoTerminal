export class Tarefa {
    constructor(
        private descricao: string,
        private status:string = "Pendente"
    ){}

    public getDescricao(): string                       { return this.descricao         }
    public setDescricao(descricao: string): void        { this.descricao = descricao    }
   
    // substitui o "tarefa_pronta" pelo método "mudarStatus"
    public mudarStatus(): void {    
        this.status == "Pendente" ? this.status = "Concluído" : this.status = "Pendente" ;  
    }

    public toString(): string {
        return `   ${this.descricao.padEnd(30)}     | ${this.status.padEnd(10)}`
    }  
}