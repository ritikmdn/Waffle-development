import React from "react";

import "./Waitlist.css"
import LandingPageNavbar from "components/LandingPageNavbar";
import { Text, Line, Button } from "components";

const WaitlistPage = () => {
  return (
    <>
      <div className="waitlist-page-container">
          <LandingPageNavbar
            waffle="Waffle."
            product="Product"
            readnews="Read News"
            joinWaitlist="Join waitlist"
          />
          <div className="waitlist">
            {/* <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start md:mt-0 mt-10 w-auto md:w-full"> */}
            <div className="waitlist-textbox">
              <Text
                className="waitlist-title"
              >
                Apply for early access
              </Text>
              <Text
                className="waitlist-description"
              >
                We are still fine tuning the product and would love your help.
                Join our Beta to help contribute to the future of news and
                knowledge.
              </Text>
            </div>
            <Line className="bg-gray_200 md:h-0.5 h-[50vmin] w-0.5 md:w-full" />
            {/* <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[39px] w-auto md:w-full"> */}
            <div className="waitlist-form">
              <div className="form-text">
                Email address / Mobile number
              </div>
              <input type="text" placeholder="Enter text here" className="form-input"/>
              <Button
                className="waitlist-button"
                shape="RoundedBorder10"
                size="lg"
                variant="FillOrangeA100"
              >
                Join waitlist
              </Button>
            </div>
          </div>
        </div>
    </>
  );
};

export default WaitlistPage;
