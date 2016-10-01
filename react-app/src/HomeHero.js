var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');



var HomeHero = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },
    handleClick: function (e) {
        $('.side-nav').toggleClass('open');
        $('#sidenav-overlay').toggleClass('open');
    },
    render: function () {


        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <br/>
                    <br/>
                        <h1 className="header center white-text text-upper">Work <span className="hero-type">Anywhere</span></h1>
                        <div className="row center">
                            <h5 className="header col s12 light white-text">Take your skills where they are most needed.</h5>
                        </div>
                        <div className="row center">
                            <button className="btn-large waves-effect waves-light  grey darken-3 text-upper"
                                    id="quickstart-sign-in">
                                <i className="fa fa-github-alt white-text" > </i>
                                Sign in with GitHub
                            </button>

                        </div>
                        <br/>
                        <br/>

                </div>
            </div>
        );
    }
});

module.exports = HomeHero;