import React, { Component } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <div>
        <div className="flex items-center justify-center flex-wrap p-6 ">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
