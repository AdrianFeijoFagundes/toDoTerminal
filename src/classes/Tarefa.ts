export class Tarefa {
    constructor(
        private descricao: string,
        private status:string = "Pendente"
    ){}

    public getDescricao(): string                       { return this.descricao         }
    public getStatus(): string                          { return this.status            }

    public setDescricao(descricao: string): void        { this.descricao = descricao    }
    public setStatus(status: string): void              { this.status = status          }

    public toString(): string {
        return `   ${this.descricao.padEnd(40)}     | ${this.status.padEnd(10)}`
    }  
}