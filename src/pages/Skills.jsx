import React, { Component } from 'react';
import '../styles/Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <main className="main-skills">
        <section className="skills-board">
          <div className="skills-board-content">
            <div className="skills-board-fixer"/>
            <h1>Minhas Habilidades</h1>
            <ul className="skills-content">
              <article className="hard-skills">
                <h3>Hard Skills:</h3>
                <li>Git e Github</li>
                <li>Html, Css e Js</li>
                <li>Jest</li>
                <li>React, Hooks e Context API</li>
                <li>Redux</li>
                <li>Next e Typescript (em aprendizado...)</li>
              </article>
              <article className="soft-skills">
                <h3>Soft Skills:</h3>
                <li>Em constante construção! <br /> Entre em contato e veja muito mais do que eu poderia descrever aqui. <br /> Vamos trabalhar juntos?</li>
              </article>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}
