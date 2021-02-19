import React, { Component } from 'react';

class Calories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="calories">
                <h5 style={{ fontSize: "30px" }}>Nutrition fact</h5>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr style={{ borderBottom: "5px solid black", fontSize: "18px", fontWeight: "500" }}>
                            <td >Serving size</td>
                            <td className="right">100 g</td>
                        </tr>
                    </tbody>
                </table>
                <h5 style={{ fontSize: "18px", fontWeight: "500" }}>Amount per serving</h5>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr style={{ borderBottom: "5px solid black" }}>
                            <td><h5 style={{ "fontSize": "40px" }}>Calories</h5></td>
                            <td className="right"><span className="bold1">89 </span></td>
                        </tr>
                    </tbody>
                </table>

                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr >
                            <td></td>
                            <td className="right bold1">% Daily value *</td>
                        </tr>
                        <tr >
                            <td><span className="bold1">Total fat</span> 0.3g</td>
                            <td className="right"><span className="bold1">0 %</span></td>
                        </tr>
                        <tr >
                            <td className="indent15">Saturated fat 0.1g</td>
                            <td className="right"><span className="bold1">0 %</span></td>
                        </tr>
                        <tr >
                            <td><span className="bold1">Sodium</span> 1mg</td>
                            <td className="right"><span className="bold1">0 %</span></td>
                        </tr>
                        <tr >
                            <td><span className="bold1">Total carbohydrate</span> 23g</td>
                            <td className="right"><span className="bold1">8 %</span></td>
                        </tr>
                        <tr >
                            <td className="indent15">Dietary fiber 2.6g</td>
                            <td className="right"><span className="bold1">9 %</span></td>
                        </tr>
                        <tr >
                            <td className="indent15">Sugar 12g</td>
                            <td className="right"><span className="bold1"></span></td>
                        </tr>
                        <tr style={{ borderBottom: "5px solid black" }}>
                            <td><span className="bold1">Protein</span> 1.1g</td>
                            <td className="right"><span className="bold1">2 %</span></td>
                        </tr>
                        <tr >
                            <td>Vitamin D 0.00mcg</td>
                            <td className="right">0 %</td>
                        </tr>
                        <tr >
                            <td>Calcium 5.00mg</td>
                            <td className="right">0 %</td>
                        </tr>
                        <tr >
                            <td>Iron 0.26mg</td>
                            <td className="right">8 %</td>
                        </tr>
                        <tr >
                            <td>Iron 0.26mg</td>
                            <td className="right">8 %</td>
                        </tr>
                        <tr style={{ borderBottom: "5px solid black" }}>
                            <td>Potassium 358mg</td>
                            <td className="right">8 %</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ marginTop: "30px" }}>The % Daily Value (DV) tells you how much a nutrient in a serving of food contribute to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
            </div>
        );
    }
}

export default Calories;