import React, { Component } from 'react';
import '../styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import ParentComponent from './ParentComponent'












class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout></BaseLayout>
        <Header />
        <ParentComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
