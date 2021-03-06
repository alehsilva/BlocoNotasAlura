export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }
    
    adicionarNota(nome, texto, categoria){
        const novaNota = new Nota(nome,texto,categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }


    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.notas));
    }
}


class Nota{
    constructor(nome, texto, categoria){
        this.nome = nome;
        this.texto = texto;
        this.categoria = categoria;
    }
}