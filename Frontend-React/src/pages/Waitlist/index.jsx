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
                We are still fine tuning the product and would love your help.<br />
                Join our Beta to help contribute to the future of news and
                knowledge.
              </Text>
            </div>
            {/* <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[39px] w-auto md:w-full"> */}
            <div className="waitlist-form">
              {/* <div className="form-text">
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
              </Button> */}
              <iframe
                src="https://1d35dfff.sibforms.com/serve/MUIEAA860L6HNhLZJ2ctqVKZTdDH5jVOLB4dfXyv-w7jOUgpwa44e03ODpJtuTEr9_gaCyXXfLC7zm0cnjLpR0TQhTbmFQeRLW77bzDatNu0DbribXmQFxXsi1LZ2CQCeiTBv27Hjq3iFNwuHyyfeLj_9YsQOrD3Q-PuJDmE9Tc27-MJVYT3DZBHQIzjRAayjn0dvnhGBxC3cKAJ"
                // className="waitlist-iframe"
                width="500vmin"
                height="500vmin"
              ></iframe>
              <div className="line-container">
                <Line className="bg-gray_200 md:h-0.5 h-[50vmin] w-0.5 md:w-full" />
                <div className="or-text">OR</div>
              </div>
              <iframe
                src="https://1d35dfff.sibforms.com/serve/MUIEAOBgozZUN6czHZd5DQS4-9PVa3L6dcixYbB1SlhSPeh0jsipTr4bMBufNyXntkVghUArXmacAod06DOpsElcK8TYxqrD2Xx3V1VOGc0uL95qXWYMdcEQBInoMmPlxSmYWnAqXwpeiOBH9VlZKLLWXkGPWUxyXq3CqrRh4_RDydjxbhhFkQ4v6BJIRjdahn33Ey00dBiOk5kR"
                // className="waitlist-iframe"
                width="500vmin"
                height="500vmin"
              ></iframe>
            </div>
            <div className="waitlist-form-mobile">
              <iframe
                src="https://1d35dfff.sibforms.com/serve/MUIEAA860L6HNhLZJ2ctqVKZTdDH5jVOLB4dfXyv-w7jOUgpwa44e03ODpJtuTEr9_gaCyXXfLC7zm0cnjLpR0TQhTbmFQeRLW77bzDatNu0DbribXmQFxXsi1LZ2CQCeiTBv27Hjq3iFNwuHyyfeLj_9YsQOrD3Q-PuJDmE9Tc27-MJVYT3DZBHQIzjRAayjn0dvnhGBxC3cKAJ"
                // className="waitlist-iframe"
                width="300vmin"
                height="310vmin"
              ></iframe>
              <div className="line-container">
                <Line className="bg-gray_200 h-0.5 w-[50vmin] md:w-full" />
                <div className="or-text">OR</div>
              </div>
              <iframe
                src="https://1d35dfff.sibforms.com/serve/MUIEAOBgozZUN6czHZd5DQS4-9PVa3L6dcixYbB1SlhSPeh0jsipTr4bMBufNyXntkVghUArXmacAod06DOpsElcK8TYxqrD2Xx3V1VOGc0uL95qXWYMdcEQBInoMmPlxSmYWnAqXwpeiOBH9VlZKLLWXkGPWUxyXq3CqrRh4_RDydjxbhhFkQ4v6BJIRjdahn33Ey00dBiOk5kR"
                // className="waitlist-iframe"
                width="300vmin"
                height="400vmin"
              ></iframe>
            </div>
          </div>
        </div>
    </>
  );
};

export default WaitlistPage;
