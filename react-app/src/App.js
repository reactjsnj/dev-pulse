var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyBmkCEad6AxdRJVEy8MtrzETphHcnsNb24",
    authDomain: "map-data-1e0ef.firebaseapp.com",
    databaseURL: "https://map-data-1e0ef.firebaseio.com",
    storageBucket: "map-data-1e0ef.appspot.com",
    messagingSenderId: "729944294128"
};
firebase.initializeApp(config);

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
