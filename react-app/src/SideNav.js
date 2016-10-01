var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');



var SideNav = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },
    closeNav: function (e) {
        $('.side-nav').toggleClass('open');
        $('#sidenav-overlay').toggleClass('open');
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