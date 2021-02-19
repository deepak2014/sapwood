import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header" style={{ display: "flex", paddingTop: "20px", paddingBottom: "20px" }}>
                <div className="logoHolder">
                    <div className="logo">Logo</div>
                </div>
                <div>
                    <h5 className="title">Healthy Fruits</h5>
                </div>
            </div>
        );
    }
}

export default Header;