import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

  constructor(){
    super()

    this.state = {categorias: []}
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount(){
    this.props.listaCategoria.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.listaCategoria.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({ ...this.state, categorias});
  }
  
  _handleAdicionaCategoria(e) {
    if (e.key === "Enter") {
      let categoria = e.target.value;
      this.props.adicionaCategoria(categoria);
      
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {

            return <li key={index}  className="lista-categorias_item">{categoria}</li>
          })}
        </ul>

        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleAdicionaCategoria.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
