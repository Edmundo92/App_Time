import React, { Component } from 'react';
import './App.css';

import PartBottom from '../part_bottom/index'
import PartTop from '../../components/part_top/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PartTop />
        <PartBottom />
      </div>
    );
  }
}

export default App;
