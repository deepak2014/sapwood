import React, { Component } from 'react';
import Fruit from './Fruit';

class Fruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                {
                    image: "./images/1.png",
                    position: "fruitImageContext left",
                    heading: "Lorem lpsum",
                    textColor: "#ffffff",
                    headingColor: "#cb657a",
                    text: "Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard",
                },
                {
                    image: "./images/2.png",
                    position: "fruitImageContext right",
                    heading: "Lorem lpsum",
                    textColor: "#505050",
                    headingColor: "#6fbf3e",
                    text: "Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard",
                },
                {
                    image: "./images/3.png",
                    position: "fruitImageContext left",
                    heading: "Lorem lpsum",
                    textColor: "#ffffff",
                    headingColor: "#fdff6b",
                    text: "Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard",
                },
            ]
        }
    }
    render() {
        return (
            <div className="fruits">
                {this.state.fruits.map(function (item, index) {
                    return <Fruit key={index} data={item}></Fruit>
                })}
            </div>
        );
    }
}

export default Fruits;