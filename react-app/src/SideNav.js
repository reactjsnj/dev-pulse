var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');

import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBmkCEad6AxdRJVEy8MtrzETphHcnsNb24",
    authDomain: "map-data-1e0ef.firebaseapp.com",
    databaseURL: "https://map-data-1e0ef.firebaseio.com",
    storageBucket: "map-data-1e0ef.appspot.com",
    messagingSenderId: "729944294128"
};
firebase.initializeApp(config);


var SideNav = React.createClass({

    getInitialState: function() {
        console.log(firebase.auth().currentUser);
        return {
            loggedIn: (null !== firebase.auth().currentUser)
        }
    },

    componentWillMount: function() {
        firebase.auth().onAuthStateChanged(firebaseUser => {

            this.setState({
                loggedIn: (null !== firebaseUser)
            })

            if (firebaseUser) {
                console.log("Logged IN", firebaseUser);
            } else {
                console.log('Not logged in');
            }
        });
    },

    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },
    closeNav: function (e) {
        $('.side-nav').toggleClass('open');
        $('#sidenav-overlay').toggleClass('open');
    },
    func: function () {

    },
    render: function () {


        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="userView">
                            <img className="background" src="assets/images/nav-bg.png" role="presentation" />
                            <a href="#!user">
                                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48dsc07710c08d50?d=mm&s=150"  className="circle" id="auth-avatar" role="presentation" />
                            </a>
                            <p className="white-text">
                                <span id="auth-name">Joe Developer</span>
                                <span id="auth-status">You are signed out.</span>
                            </p>
                        </div>
                    </li>

                </ul>
                <div id="sidenav-overlay" className="" onClick={this.closeNav} ></div>
            </div>
        );
    }
});

module.exports = SideNav;