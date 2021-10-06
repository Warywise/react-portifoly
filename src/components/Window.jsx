import React, { Component } from 'react';
import '../styles/Window.css';

export default class Window extends Component {
  render() {
    return (
      <div className="window-box">
        <div className="window">
          <div className="window-glass"/>
          <div className="window-glass"/>
          <div className="window-glass"/>
          <div className="window-glass"/>
        </div>
        <div className="window-base"/>
      </div>
    );
  }
}
