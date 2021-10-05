import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
    return (
      <main>
        <h1>Quem sou eu?</h1>
        <article className="main-text">
          Nascido em Niterói-RJ no dia 18 de fevereiro de 1994, atualmente tenho 27 anos e moro em Nova Iguaçu-RJ.
          Gosto de atividades ao ar livre, RPG de mesa, <s>dormir,</s> Rock, animes e socializar
          Divido a minha vida com duas lindas meninas, uma delas é a minha esposa Kezia, a outra é minha filha Keila, de 1 ano.
          Desde pequeno sou fascinado na área de tecnologia, computação e afins, a vida me distanciou desse caminho, mas agora, volto a navegar nessas águas, iniciando minha história de Desenvolvedor Web na Trybe.
        </article>
      </main>
    );
  }
}
