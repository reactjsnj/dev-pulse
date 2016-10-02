import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
var Navbar = require('./Navbar');
var SideNav = require('./SideNav');
var Footer = require('./Footer');
var HomeHero = require('./HomeHero');
// Search
var Search = require('./Search');
var Jobs = require('./Jobs');

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
            <SideNav />
            <HomeHero />

          <Jobs search={this.movieSearchTerm} />

            <Footer />
        </div>
    );
  }
}

export default App;
