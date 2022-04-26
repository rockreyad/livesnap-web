import React, { Component } from "react";
import livesnap from "./livesnap.png";

export class Logo extends Component {
  render() {
    return (
      <div>
        <img className={`w-72 h-14`} src={livesnap} alt="Livesnap" />
      </div>
    );
  }
}

export default Logo;
