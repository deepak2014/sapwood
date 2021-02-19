import React, { Component } from 'react';


class Fruit extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="furitHolder">
                <img src={this.props.data.image} alt="Girl in a jacket" style={{ width: "100%" }} />
                <div className={this.props.data.position}>
                    <h5 className="fruitHeading" style={{ color: this.props.data.headingColor }}>{this.props.data.heading}</h5>
                    <p className="fruitText" style={{ color: this.props.data.textColor }}>{this.props.data.text}</p>
                </div>
            </div>
        );
    }
}

export default Fruit;