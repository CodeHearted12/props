import Footer from './Footer'
import Header from './Header'
import React, { Component } from 'react'

class BaseLayout extends Component {
  render() {
    return (
      <div>This should house Header and Footer components and be able to house any children components.</div>
    );
  }
}
