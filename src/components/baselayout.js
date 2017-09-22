import Footer from './Footer'
import Header from './Header'
import React, { Component } from 'react';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}

export default BaseLayout;
