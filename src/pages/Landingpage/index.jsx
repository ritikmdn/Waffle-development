import React from "react";

import LandingPageNavbar from "components/LandingPageNavbar";
import { Text, Img, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

import "./Landingpage.css"

const LandingpagePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="page-container"> 
        <LandingPageNavbar
          waffle="Waffle."
          product="Product"
          readnews="Read News"
          joinWaitlist="Join waitlist"
        />
        <div className="page-top-section">
          <div className="top-section-text">
            <Text
              className="top-text-main"
            >
              Instagram, but for knowledge
            </Text>
            <Text
              className="top-text-description"
            >
              <>
                With our easily digestible format, acquiring knowledge is as
                easy as playing a fun game, whether you&#39;re commuting or
                taking a quick break
              </>
            </Text>
          </div>
          <Img
            src="images/img_mainlandingpage.svg"
            className="top-section-illustration"
            alt="illustrationlan"
          />
        </div>
        {/* <div className="flex flex-col items-center justify-start mt-[200px] w-full"> */}
        <div className="page-bottom-section">
          {/* <div className="bg-white_A700 flex flex-col md:gap-10 gap-[111px] items-center justify-start p-[42px] ml-auto mr-auto px-[200px] md:px-10 sm:px-5 w-full"> */}
          <div className="page-bottom-top">
            {/* <div className="flex flex-col items-center justify-start max-w-[1252px] mb-[109px] mx-auto w-full"> */}
              {/* <div className="flex flex-col items-center justify-start w-full"> */}
              <div className="overview-title">
                <Text
                  className="text-black_900 text-center w-auto mt-[80px]"
                >
                  News served faster than your coffee
                </Text>
              </div>
              <div
                // className="flex md:flex-col flex-row mt-[50px] md:gap-10 items-center justify-between ml-auto mr-auto w-[100%] h-[400px] md:w-full"
                className="feature-box"
                style={{
                backgroundImage: "url('images/img_group33.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "25px"
                }}
              >
                {/* <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-auto mr-auto w-[80%] md:w-full"> */}
                {/* <div className="feature-image"> */}
                  <Img
                    id ="target"
                    src="images/img_landingpageoverview1.svg"
                    className="feature-image"
                    alt="illustrationlan_Two"
                  />
                  {/* <div style={{ maxWidth: "350px"}} className="flex flex-col items-center w-auto md:w-full ml-12"> */}
                  <div className="feature-text">
                    <Text
                      className="feature-text-title"
                    >
                      Fun. Like a game.
                    </Text>
                    <Text
                      className="feature-text-description"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, turpis vitae hendrerit facilisis, ligula erat maximus urna, ut congue nibh erat tempor enim. Quisque vitae nisl dolor. Duis a sapien sit amet justo iaculis sollicitudin. Integer ac augue eros. In egestas volutpat suscipit. 
                    </Text>
                  </div>
                {/* </div> */}
              </div>
              <div
                // className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start mt-[50px] md:px-10 sm:px-5 px-[50px] mr-auto ml-auto w-[100%]"
                className="feature-box"
                style={{
                backgroundImage: "url('images/img_group33.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "25px"
                }}
              >
                {/* <div className="feature-image"> */}
                <div className="feature-text">
                    <Text
                      className="feature-text-title"
                    >
                      Social. Like a party.
                    </Text>
                    <Text
                      className="feature-text-description"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, turpis vitae hendrerit facilisis, ligula erat maximus urna, ut congue nibh erat tempor enim. Quisque vitae nisl dolor. Duis a sapien sit amet justo iaculis sollicitudin. Integer ac augue eros. In egestas volutpat suscipit. 
                    </Text>
                </div>
                <Img
                  id ="target"
                  src="images/img_landingpageoverview2.svg"
                  className="feature-image"
                  alt="illustrationlan_Two"
                />
                {/* </div> */}
              </div>
              <div
                className="feature-box"
                style={{
                backgroundImage: "url('images/img_group33.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "25px"
                }}
              >
                {/* <div className="feature-image"> */}
                  <Img
                    id ="target"
                    src="images/img_landingpageoverview3.svg"
                    className="feature-image"
                    alt="illustrationlan_Two"
                  />
                  <div className="feature-text">
                    <Text
                      className="feature-text-title"
                    >
                      Compact. Like a TikTok.
                    </Text>
                    <Text
                      className="feature-text-description"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, turpis vitae hendrerit facilisis, ligula erat maximus urna, ut congue nibh erat tempor enim. Quisque vitae nisl dolor. Duis a sapien sit amet justo iaculis sollicitudin. Integer ac augue eros. In egestas volutpat suscipit. 
                    </Text>
                  </div>
                {/* </div> */}
              </div>
            {/* </div> */}
          </div>
          {/* <div className="bg-bluegray_901 flex flex-col items-center justify-start pb-[50px] w-[100%]"> */}
          <div className="page-bottom-down">
                <Text
                  className="footer-title-text"
                >
                  The future of news and knowledge.
                </Text>
                <Button
                  className="footer-button"
                  onClick={() => navigate("/waitlist")}
                  shape="RoundedBorder10"
                  // size="md"
                  variant="FillOrangeA100"
                >
                  <div className="font-medium text-black_900 text-center">
                    Join waitlist
                  </div>
                </Button>
                <Line className="bg-gray_105 h-0.5 mt-[10vmin] w-full" />
                {/* <div className="flex flex-row md:gap-10 items-center justify-between mt-[15px] w-full"> */}
                <div className="footer-bottom">
                  {/* <div className="flex flex-row items-end justify-between w-[17%]"> */}
                  <div className="footer-socials">
                    <Text
                      className="footer-socials-text"
                    >
                      Follow us on
                    </Text>
                    <a href="https://www.instagram.com/newsinpoint/" target="_blank">
                      <Img
                        src="images/img_instagramglyphwhite.png"
                        className="h-[25px] md:h-auto object-cover w-[25px]"
                        alt="instagramglyphw"
                      />
                    </a>
                    <a href="http://chat.whatsapp.com/Hqitid1Gr958cCfOJNzhCD" target="_blank">
                      <Img
                        src="images/img_digitalglyphwhite.png"
                        className="h-[25px] md:h-auto object-cover w-[25px]"
                        alt="digitalglyphwhi"
                      />
                    </a>
                  </div>
                  <Text
                    className="text-left text-white_A700 w-auto"
                    variant="body2"
                  ></Text>
                </div>
                <Text
                  className="mt-4 text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Coming soon on
                </Text>
                <Img
                  src="images/img_googleplay.png"
                  className="googleplay"
                  alt="googleplay"
                />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;