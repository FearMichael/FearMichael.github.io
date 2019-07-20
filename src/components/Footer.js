import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer footer-copyright blue lighten-2">
                <h5 className="center-align nomargin nopadding">Michael Fearnley &copy; <i className="small material-icons footerArrow" onClick={this.props.toTop}>arrow_upward</i></h5>
            </footer> 
        )
    }
}
export default Footer;