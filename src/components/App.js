import React, { Component } from 'react';
import '../styles/App.css';
import ParentComponent from './ParentComponent'
import BaseLayout from './BaseLayout'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout/>

         <ParentComponent />
         <Footer/>
      </div>
    );
  }
}

export default App;
