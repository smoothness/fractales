/* global $ */

import React, { Component } from "react";
import ControlPanel from "../ControlPanel/";
import Header from "../Header/";
import P5Wrapper from "../P5Wrapper/";
import config from "../../lib/config/";
import { getPlant } from "../../lib/sliders/";

export default class App extends Component {
  // Constructor ---------------------------------------------------------------
  constructor() {
    super();

    const plants = [];
    for (let i = 0; i < config.plantNum; i++) {
      plants.push({ ...getPlant() });
    }

    this.state = {
      p5Props: {
        status: "",
        plants,
      },
    };
  }

  // Event handlers ------------------------------------------------------------
  getBranchesNum = (index, num) => {
    const plants = $.extend(true, [], this.state.p5Props.plants);
    plants[index].branchesNum = num;
    this.setState({ p5Props: { ...this.state.p5Props, plants } });
  }

  onReady = () => this.setState({ status: "ready" });

  onSliderChange = (key) => (event) => {
    const plants = $.extend(true, [], this.state.p5Props.plants);
    plants.forEach((plant) => plant[key] = +event.target.value);
    this.setState({ p5Props: { ...this.state.p5Props, plants } });
  }

  // Main renderer -------------------------------------------------------------
  render() {
    return (
      <div className="app">
        {/* Header --------------------------------------------------------- */}
        <Header />

        <div className="container" style={{'margin': '80px auto 0', position: 'relative', 'z-index': 9}}>
          <h4>Fractales</h4>
          <p style={{margin: 0}}>Este proyecto consiste en una demostración de fractales.</p>
          <p style={{margin: 0}}><small><b>Profesor:</b> Pedro Romero</small></p>
          <p style={{margin: 0}}><small><b>Estudiantes:</b> Sydney Rodríguez- Javier Poveda</small></p> 
        </div>
        {/* Main content --------------------------------------------------- */}
        <div
          className="container"
          style={{ marginTop: "0px", background: "#FFF" }}
        >
          {/* p5.js sketch ------------------------------------------------- */}
          <P5Wrapper
            {...this.state.p5Props}
            getBranchesNum={this.getBranchesNum}
            onReady={this.onReady}
          />

          {/* Control panel ------------------------------------------------ */}
          <ControlPanel
            plants={this.state.p5Props.plants}
            onSliderChange={this.onSliderChange}
          />
        </div>
      </div>
    );
  }
}
