import React, { Component } from "react";
import Header from "./Header";

export class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mx-auto sm:px-4">
          <h2 className="text-2xl font-semibold py-3 uppercase">About Us</h2>

          <div className="flex space-y-4">
            <div className="flex-col space-y-2">
              <h3 className="text-lg py-2">
                Livesnap is one of the best usefull apps for snapchat. Where
                people can send images & videos direct from their gallery.
              </h3>
              <h3 className="text-lg">
                User are able to control over the snapchat stories & live
                images. They can also sell this apps for a perspectives.
              </h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;
