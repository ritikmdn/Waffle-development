import React, {useRef} from "react";
import "./Landingpage.css"

import LandingPageNavbar from "components/LandingPageNavbar";
import { Text, Img, Button, Line } from "components";
import { useNavigate } from "react-router-dom";
// import React, {useRef } from 'react';

const LandingpagePage = () => {

  const navigate = useNavigate();
  const bottomRef = useRef(null);

  return (
    <>
      <div className="landingpage-container"> 
        <LandingPageNavbar
          bottomRef = {bottomRef}
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
              Get news in bite-sized waffles and win big. Swipe through hot-takes, trade on your opinion, and share your views. It’s news meets social media meets gaming!
              </>
            </Text>
          </div>
          <Img
            src="images/img_mainlandingpage.svg"
            className="top-section-illustration"
            alt="illustrationlan"
          />
        </div>
        <div className="page-bottom-section" ref={bottomRef} id="product">
          <div className="page-bottom-top">
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
                      Trade opinions, take polls, and dive into trending topics - it’s news made fun. Play games with friends, and compete against other readers in exciting games that offer real cash prizes!
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
                      Get into the groove with Waffle News and make discovering knowledge a social activity. Connect with people, discuss and debate topics, share ideas and opinions, and follow your favorite news influencers!
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
                      Engaging. Like a Reel.
                    </Text>
                    <Text
                      className="feature-text-description"
                    >
                      Articles designed for quick consumption with personalized feed tailored to your interests, making them the perfect replacement to your Instagram breaks! Short, social bursts of knowledge. 
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