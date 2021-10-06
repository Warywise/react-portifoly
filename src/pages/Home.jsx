import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  GitHubIcon, FacebookIcon, LinkedInIcon,
  ComputerIcon, KeyboardIcon, BoardPin
} from '../images/svgFiles';

export default class Home extends Component {
  render() {
    return (
      <main className="home">
        <h2>Seja Bem Vindo!</h2>
        <div className="home-div">
          <div className="computer-div">
            { ComputerIcon }
            <div className="computer-photo" />
            <div className="sociallinks-div">
              <a
                href="https://github.com/Warywise"
                rel="noreferrer"
                target="_blank"
              >{ GitHubIcon }</a>
              <a
                href="https://web.facebook.com/gustavo.santanna.77"
                rel="noreferrer"
                target="_blank"
              >{ FacebookIcon }</a>
              <a
                href="https://www.linkedin.com/in/g-s-s/"
                rel="noreferrer"
                target="_blank"
              >{ LinkedInIcon }</a>
            </div>
          </div>
          { KeyboardIcon }
        </div>
        <aside className="aside-board">
          <div className="board-fixer"/>
          <div>
            { BoardPin }
            <Link onClick={ this.handleClick } to="/react-portifoly/skills">Skills</Link>
          </div>
          <div>
            { BoardPin }
            <Link onClick={ this.handleClick } to="/projects">Projetos</Link>
          </div>
          <div>
            { BoardPin }
            <Link onClick={ this.handleClick } to="/about">Sobre</Link>
          </div>
        </aside>
      </main>
    );
  }
}
