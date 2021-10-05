import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class Skills extends Component {
  render() {
    return (
      <main>
        <h1>Minhas Skills</h1>
        <ul>
          <article>
            <p>Hard Skills:</p>
            <li>Git e Github</li>
            <li>Html, Css e Js</li>
            <li>Jest</li>
            <li>React</li>
          </article>
          <article>
            <p>Soft SKills:</p>
            <li>Inteligência emocional</li>
            <li>Capacidade analítica</li>
            <li>Comunicação</li>
            <li>Empatia</li>
            <li>Objetividade</li>
          </article>
        </ul>
      </main>
    );
  }
}
