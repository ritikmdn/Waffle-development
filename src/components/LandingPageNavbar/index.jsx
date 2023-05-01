import React, { useState } from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const LandingPageNavbar = (props) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={props.className}
        style={{ 
          position: "fixed", 
          top: 25, left: 0, right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.96)",
        }}
      >
        <div
          className="common-pointer flex flex-row gap-[5px] items-center justify-start pr-1.5 w-1/4 md:w-full ml-10"
          onClick={() => navigate("/")}
          style={{marginLeft:"5px"}}
        >
          <Img
            src="images/img_image1.png"
            className="h-9 md:h-auto object-cover w-[37px]"
            alt="imageOne"
          />
          <Text
            className="font-helveticaneue text-black_900 text-center w-auto"
            as="h6"
            variant="h6"
          >
            {props?.waffle}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <Text
            className="common-pointer font-helveticaneue font-normal text-black_900 text-left w-auto"
            variant="body3"
            onClick={() => navigate("/#product")}
          >
            {props?.product}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto md:w-full">
          <Text
            className="common-pointer font-helveticaneue font-normal text-black_900 text-left w-auto"
            variant="body3"
            onClick={() => navigate("/newsfeed")}
          >
            {props?.readnews}
          </Text>
        </div>
        <Button
          className="common-pointer cursor-pointer font-helveticaneue font-medium min-w-[133px] text-base text-black_900 text-center w-auto mr-10"
          onClick={() => navigate("/waitlist")}
          shape="RoundedBorder10"
          size="md"
          variant="FillOrangeA100"
          style={{marginRight:"5px"}}
        >
          {props?.joinWaitlist}
        </Button>
      </div>
    </>
  );
};

LandingPageNavbar.defaultProps = {
  waffle: "Waffle.",
  product: "Product",
  readnews: "Read News",
  joinWaitlist: "Join waitlist",
};

export default LandingPageNavbar;
