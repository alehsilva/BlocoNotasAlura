export default class Categoria{
    constructor(){
        this.listaCategorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.listaCategorias));
    }

    adicionaCategoria(novaCategoria){
        
        this.listaCategorias.push(novaCategoria);
        this.notificar();
        
    }
}