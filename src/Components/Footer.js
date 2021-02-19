import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ width: "98%", margin: "auto", marginTop: "30px", paddingBottom: "30px", fontSize: "13px" }}>
                <div style={{ marginTop: "20px" }}>
                    <ul style={{ fontSize: "25px", fontWeight: 500, color: "#56a991", marginLeft: "-16px" }}>
                        <li>Delivering with love and care for you to relish</li>
                    </ul>
                </div>
                <div style={{ borderBottom: "5px solid black" }}></div>
                <div style={{ marginTop: "20px" }}>
                    <h5 style={{ fontSize: "15px" }}>About Demo, Group</h5>
                    <p>Leading the Corps Divison for Demo Group is India's best branded fruit company and a market leader in controlled cultivation and marketing of high-quality fruits to demostic and international customers in a socially responsible manner.</p>
                    <p>We are happy to serve fresh & delicious fruits.</p>
                </div>
                <div style={{ borderBottom: "5px solid black", marginTop: "20px" }}></div>
            </div>
        );
    }
}

export default Footer;