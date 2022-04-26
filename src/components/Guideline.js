import React, { Component } from "react";
import Header from "./Header";

export class Guideline extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container mx-auto sm:px-4">
        <h2 className="text-2xl font-semibold py-3 uppercase">
            Guidelines to use Livesnap
          </h2>

          <div className="flex space-y-4">

            <div className="">
              <h3 className="text-lg">How to register on Livesnap?</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guideline;
