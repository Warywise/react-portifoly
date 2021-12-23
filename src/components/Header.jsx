import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

export default class Header extends Component {
  handleClick = ({ target }) => {
    if (document.querySelector('.actived')) document.querySelector('.actived')
      .classList.remove('actived');
    target.classList.add('actived');
  }

  render() {
    return (
      <header>
        <nav className="nav-bar" alt="expandir barra de navegação">
          <span>≡</span>
          <div className="nav-bar-div">
            <Link onClick={ this.handleClick } to="/react-portifoly">Início</Link>
            <Link onClick={ this.handleClick } to="/react-portifoly/skills">Skills</Link>
            <Link onClick={ this.handleClick } to="/react-portifoly/projects">Projetos</Link>
            <Link onClick={ this.handleClick } to="/react-portifoly/about">Sobre</Link>
          </div>
        </nav>
        <h2 className="head-name">Gustavo Sant'Anna</h2>
      </header>
    );
  }
}
