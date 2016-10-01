var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');



var Navbar = React.createClass({
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
            <nav className="blue darken-3">
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="#" dataActivates="slide-out" className="left button-for-nav" onClick={this.handleClick}><i className="material-icons">menu</i></a>

                        <a href="#!" className="brand-logo center">
                            <img src="assets/images/logo.png" alt="logo" role="presentation" className="logo" />
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="grey darken-1 waves-effect waves-light btn"
                                   target="_blank"
                                   href="https://github.com/anthonydelgado/dev-pulse">Github</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Navbar;