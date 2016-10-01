var React = require('react');

var Footer = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

    render: function () {
        return (
            <footer className="page-footer blue-grey lighten-4">
                <div className="container">
                    <div className="row center">
                        <div className="col s12">
                            <p className="flow-text light white-text">

                                <img src="assets/images/logo.png" alt="logo" className="logo" />
                                <br/>
                                Dev Pulse is deeply passionate about software developers.
                                        <br/>
                                            We focus on helping you find work life balance and a career that you will love.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2016 Dev Pulse
                        <a className="grey-text text-lighten-4 right" href="#!">Open Source</a>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;