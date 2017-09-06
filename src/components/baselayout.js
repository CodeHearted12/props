import Footer from './Footer'
import Header from './Header'
import react, { Component } from 'react';

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
