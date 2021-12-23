import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { ComputerIcon } from '../images/svgFiles';

export default class Projects extends Component {
  render() {
    return (
      <main>
        <h1>Meus projetos</h1>
        <div className='computer-div'>{ ComputerIcon }</div>
      </main>
    );
  }
}
