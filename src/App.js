import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categoria from "./dados/Categoria";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();

    this.categorias = new Categoria();
    this.notas = new ArrayDeNotas();


    this.state = {
     // notas: [],
      //categorias:[],
    };
  }

  /*criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }
*/
  /*adicionaCategoria(categoria){
    let arrayCategoria = [...this.state.categorias, categoria];
    const novoEstado = {...this.state, categorias: arrayCategoria};
    this.setState(novoEstado);

  }*/

  /*selecionaCategoria(categoria){
    const novoArray = this.state.notas.filter( nota => ( nota.categoria === categoria) );
    const novoEstado = {...this.state, notas:novoArray}
    this.setState(novoEstado);
  }*/

 
  render() {
    
    return ( 
      
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
        <ListaDeCategorias  listaCategoria={this.categorias} adicionaCategoria={this.categorias.adicionaCategoria.bind(this.categorias)}/>
        <ListaDeNotas  apagarNota={this.notas.deletarNota.bind(this.notas)} notas={this.notas}/>
        
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
