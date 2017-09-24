import React, { Component } from 'react';
import '../styles/App.css';
import parentcomponent from './parentcomponent'
import BaseLayout from './BaseLayout'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout/>

         <parentcomponent />
         <Footer/>
      </div>
    );
  }
}

export default App;
