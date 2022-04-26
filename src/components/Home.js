import React, { Component } from "react";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="main pb-64 pt-32">
          <div className="flex flex-col justify-center items-center space-y-14">
            <Logo />
            <h1 className="text-white font-extrabold text-3xl">
              Send Snaps From Your Gallery
            </h1>
            <div className="flex flex-row space-x-4">
              <DownloadButton
                buttonName="Download Livesnap"
                version="Official"
                downloadUrl="https://drive.google.com/file/d/1_HZL0VBkBUCwaHFoGjDQhQSXzCkhPUkj/view?usp=sharing"
              />
              <DownloadButton
                buttonName="Download Livesnap"
                version="Backup"
                downloadUrl="https://drive.google.com/drive/folders/1NlED32buV2kwLs-gKoiMddBerLILf2IR?usp=sharing"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
