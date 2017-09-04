import React, { Component } from 'react';
import '../styles/App.css';
import ParentComponent from './ParentComponent'
import BaseLayout from './BaseLayout'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>

        <ParentComponent />
      
      </div>
    );
  }
}

export default App;
