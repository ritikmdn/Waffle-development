import React from "react";

import LandingPageNavbar from "components/LandingPageNavbar";
import { Text, Line, Button } from "components";

const WaitlistPage = () => {
  return (
    <>
      <div className="bg-gray_300 flex flex-col font-helveticaneue items-start justify-start mx-auto p-[42px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[145px] justify-start mb-[210px] md:ml-[0] ml-[58px] w-[86%] md:w-full">
          <LandingPageNavbar
            className="bg-gray_200 flex flex-row items-center justify-end mx-auto p-[9px] md:px-5 rounded-[10px] w-[39%] md:w-full"
            waffle="Waffle."
            product="Product"
            readnews="Read News"
            joinWaitlist="Join waitlist"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start md:mt-0 mt-10 w-auto md:w-full">
              <Text
                className="font-helveticaneue text-black_900 text-left w-full"
                as="h1"
                variant="h1"
              >
                Apply for early access
              </Text>
              <Text
                className="font-helvetica text-gray_600 text-left w-auto"
                as="h4"
                variant="h4"
              >
                We are still fine tuning the product and would love your help.
                Join our Beta to help contribute to the future of news and
                knowledge.
              </Text>
            </div>
            <Line className="bg-gray_200 md:h-0.5 h-[520px] w-0.5 md:w-full" />
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[39px] w-auto md:w-full">
              <Text
                className="font-helvetica font-normal text-gray_600 text-left w-auto"
                variant="body1"
              >
                Email address / Mobile number{" "}
              </Text>
              <div className="bg-gray_200 h-[68px] mt-2 rounded-[10px] w-full"></div>
              <Button
                className="cursor-pointer font-helveticaneue font-medium leading-[normal] min-w-[450px] sm:min-w-full mt-[45px] sm:text-2xl md:text-[26px] text-[28px] text-black_900 text-center w-auto"
                shape="RoundedBorder10"
                size="lg"
                variant="FillOrangeA100"
              >
                Join waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitlistPage;
