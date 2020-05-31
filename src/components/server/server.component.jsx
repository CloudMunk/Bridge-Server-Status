import React from "react";

// Data
import data from "../../data/data";

// Styles
import "./server.styles.scss";

class Server extends React.Component {
    constructor(props) {
        super(props);

        const { json1, json2, json3 } = data;

        this.state = {
            randomJSON: {},
            json: [json1, json2, json3],
        };
    }

    // Methods
    getARandom() {
        const state = this.state;
        return (
            state.json[Math.floor(Math.random() * state.json.length)] &&
            console.log(state.randomJSON)
        );
    }

    randomJSON() {
        const state = this.state;
        return state.json[Math.floor(Math.random() * state.json.length)];
    }

    setJSON() {
        const state = this.state;
        this.setState({
            randomJSON: [this.randomJSON()],
        });
        console.log(state.randomJSON);
    }

    componentWillMount() {
        this.setJSON();
    }

    render() {
        return (
            <div className="server">
                <div className="server-panel">
                        <div className="frontpanel-container">
                            <img
                            className="frontpanel"
                            src={require("../../assets/440_frontpanel.png")}
                            alt="server front panel"
                            />
                            <div
                            className={`status-blink psu1 ${
                                this.state.randomJSON[0].psu1.status === "ok" ? "green" : "red"
                            }`}
                            >

                            </div>
                            <div
                            className={`status-blink psu2 ${
                                this.state.randomJSON[0].psu2.status === "ok" ? "green" : "red"
                            }`}
                            ></div>
                            <div
                            className={`status-box psu1 ${
                                this.state.randomJSON[0].psu1.status === "ok" ? "green" : "red"
                            }`}
                            >

                            </div>
                            <div
                            className={`status-box psu2 ${
                                this.state.randomJSON[0].psu2.status === "ok" ? "green" : "red"
                            }`}
                            >

                            </div>
                            <div
                            className={`status-box mgmt1 ${
                                this.state.randomJSON[0].mgmt1.link_status === "no link"
                                ? "gray"
                                : "green"
                            }`}
                            >
                            
                            </div>
                            <div
                            className={`status-box mgmt2 ${
                                this.state.randomJSON[0].mgmt2.link_status === "no link"
                                ? "gray"
                                : "green"
                            }`}
                            >
                            
                            </div>
                            <div
                            className={`status-box data1 ${
                                this.state.randomJSON[0].data1.link_status === "no link"
                                ? "gray"
                                : "green"
                            }`}
                            >
                            
                            </div>
                            <div
                            className={`status-box data2 ${
                                this.state.randomJSON[0].data2.link_status === "no link"
                                ? "gray"
                                : "green"
                            }`}
                            >
                            
                            </div>
                        </div>
                        <div className="grid">
                            <div>
                            <p>PSU 1</p>
                            <p>Status: {this.state.randomJSON[0].psu1.status}</p>
                            <p>
                                {this.state.randomJSON[0].psu1.status === "ok"
                                ? this.state.randomJSON[0].psu1.volt + "V"
                                : "Power Supply AC lost"}
                            </p>
                            </div>
                            <div>
                            <p>PSU 2</p>
                            <p>Status: {this.state.randomJSON[0].psu2.status}</p>
                            <p>
                                {this.state.randomJSON[0].psu2.status === "ok"
                                ? this.state.randomJSON[0].psu2.volt + "V"
                                : "Power Supply AC lost"}
                            </p>
                            </div>
                            <div className="mgmt">
                            <table>
                                <thead>
                                <tr>
                                    <td>MGMT</td>
                                    <td>Status</td>
                                    <td>BPS</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{this.state.randomJSON[0].mgmt1.link_status}</td>
                                    <td>{this.state.randomJSON[0].mgmt1.bps}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{this.state.randomJSON[0].mgmt2.link_status}</td>
                                    <td>{this.state.randomJSON[0].mgmt2.bps}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="data">
                            <table>
                                <thead>
                                <tr>
                                    <td>Data</td>
                                    <td>Status</td>
                                    <td>BPS</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{this.state.randomJSON[0].data1.link_status}</td>
                                    <td>{this.state.randomJSON[0].data1.bps}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{this.state.randomJSON[0].data2.link_status}</td>
                                    <td>{this.state.randomJSON[0].data2.bps}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                        <div className="get-random-json-button" onClick={() => this.setJSON()}>
                        Get Random JSON
                        </div>
                    </div>
        );
    }
}


export default Server;

