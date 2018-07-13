import React, { Component } from 'react';
import './style.css';
import Login from '../login/index';

class Main extends Component {
  render() {
    return (
      <div className="main_wrapper">
        <div className="main_content_wrapper" id="left_main_wrapper"></div>
        <div className="main_content_wrapper" id="right_main_wrapper">
          <Login />
        </div>
      </div>
    );
  }
}

export default Main;
