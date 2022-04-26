import React, { Component } from "react";
import Header from "./Header";

export class Privacy extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mx-auto sm:px-4">
          <h2 className="text-2xl font-semibold py-3 uppercase">
            Privacy Policy
          </h2>
          <span className="font-bold">Last Update On: 25-April-2022</span>
          <p className="text-lg py-3">
            When you use our services, you’re trusting us with your information.
            We understand this is a big responsibility and work hard to protect
            your information and put you in control.
          </p>

          <div className="flex flex-col space-y-4">
            <div className="space-y-3">
              <h3 className="font-bold">1.Terms</h3>
              <p className="font-light">
                By accessing Livesnap, you are agreeing to be bound by these app
                Terms and Conditions of Use, all applicable laws and
                regulations, and agree that you are responsible for compliance
                with any applicable local laws, if you do not agree with any of
                these terms, you are prohibited from using or accessing
                Livesnap.The materials contained in Livesnap are protected by
                applicable copyright and trade mark law.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">2.License</h3>
              <p className="font-light">
                Purchased license is valid for single user only.Illegally using
                Livesnap without a valid license can be permanently terminated
                your account without any notice.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">3.Your Infromation</h3>
              <p className="font-light">
                We Collect information you provide, Browsing, Device ID, and
                Device Models you use to access Livesnap to verify your identity
                and prevent fraud or other unauthorized or illegal activity We
                may share information, but we won't sell it to advertisers or
                third parties.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">4.Camera and Photos</h3>
              <p className="font-light">
                Our services require us to collect images and other information
                from your device’s camera and photos. For example, you won’t be
                able to send Snaps or upload photos from gallery unless we can
                access your camera or photos.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">5.Children</h3>
              <p className="font-light">
                Our services are not intended for anyone under 13.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">6.Illegal Use</h3>
              <p className="font-light">
                Illegal activity will not be tolerated on Livesnap. This may
                result in being banned from our app.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">7.Nudity/Sexual Content</h3>
              <p className="font-light">
                We do not tolerate any sexually explicit content. This includes
                content in the photo, and video.Please don't post everywhere
                else
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold">8.Purchasing Issue</h3>
              <p className="font-light">
                We have seen that many of you are being deceived by buying
                licenses from unauthorized sellers.No license is acceptable
                without an authorized dealer.If you purchase licenses from third
                parties that license will be terminated.
              </p>
            </div>
            <p className="font-semibold">
              If you require any more information or have any questions about
              our privacy policy, please feel free to contact us
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;
