import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav-bar" alt="barra de navegação">
          <span>≡</span>
          <div className="nav-bar-div">
            <Link to="/">Início</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/about">Sobre</Link>
          </div>
        </nav>
        <h2 className="head-name">Gustavo Sant'Anna</h2>
      </header>
    );
  }
}
