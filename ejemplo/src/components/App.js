import React, { Component } from 'react';
import Incrementador from './Incrementador';
import Lista from './Lista';

class App extends Component {
  render() {
    return (
      <div>
        <Incrementador />
        <Lista />
      </div>
    );
  }
}

export default App;
