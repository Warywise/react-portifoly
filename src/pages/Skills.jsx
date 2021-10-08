import React, { Component } from 'react';
import '../styles/Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <main className="main-skills">
        <section className="skills-board">
          <div className="skills-board-content">
          <div className="skills-board-fixer"/>
            <h1>Minhas Skills</h1>
            <ul className="skills-content">
              <article className="hard-skills">
                <h3>Hard Skills:</h3>
                <li>Git e Github</li>
                <li>Html, Css e Js</li>
                <li>Jest</li>
                <li>React</li>
              </article>
              <article className="soft-skills">
                <h3>Soft SKills:</h3>
                <li>Inteligência emocional</li>
                <li>Capacidade analítica</li>
                <li>Comunicação</li>
                <li>Empatia</li>
                <li>Objetividade</li>
              </article>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}
