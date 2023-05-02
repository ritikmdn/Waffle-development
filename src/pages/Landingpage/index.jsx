import React from "react";

import LandingPageNavbar from "components/LandingPageNavbar";
import { Text, Img, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const LandingpagePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_300 flex flex-col font-helveticaneue items-center justify-end mx-auto pt-[0px] w-full">
        <div className="flex flex-col justify-start w-full">
          <LandingPageNavbar
            // className="bg-gray_200 flex flex-row items-center justify-end mx-auto p-[9px] md:px-5 rounded-[10px] w-[39%] md:w-full"
            waffle="Waffle."
            product="Product"
            readnews="Read News"
            joinWaitlist="Join waitlist"
          />
          <div id="first" className="flex md:flex-col flex-row gap-[42px] items-center justify-end ml-auto mr-auto mt-[157px] px-[200px] w-[100%] md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
              <Text
                className="font-helveticaneue text-black_900 text-left w-full"
                variant="body5"
              >
                Instagram, but for knowledge
              </Text>
              <Text
                className="font-helvetica font-normal text-gray_600 text-left w-[100%] sm:w-full"
                variant="body1"
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
              className="h-[400px] w-auto max-w-full"
              alt="illustrationlan"
            />
          </div>
          <div id="second" className="flex flex-col items-center justify-start mt-[200px] w-full">
            <div className="bg-white_A700 flex flex-col md:gap-10 gap-[111px] items-center justify-start p-[42px] ml-auto mr-auto px-[200px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1252px] mb-[109px] mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-black_900 text-center w-auto mt-[80px]"
                    as="h"
                    variant="h3"
                  >
                    News served faster than your coffee
                  </Text>
                </div>
                <div
                  // className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start mt-[50px] md:px-10 sm:px-5 px-[50px] mr-auto ml-auto w-[100%]"
                  className="flex md:flex-col flex-row mt-[50px] md:gap-10 items-center justify-between ml-auto mr-auto w-[100%] h-[400px] md:w-full"
                  style={{
                  backgroundImage: "url('images/img_group33.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "25px"
                  }}
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-auto mr-auto w-[80%] md:w-full">
                    <Img
                      id ="target"
                      src="images/img_landingpageoverview1.svg"
                      className="h-[300px] w-auto"
                      alt="illustrationlan_Two"
                      style={{ maxWidth: "350px"}}
                    />
                    <div style={{ maxWidth: "350px"}} className="flex flex-col items-center w-auto md:w-full ml-12">
                      <Text
                        className="text-black_900 text-left w-full mb-4"
                        as="h4"
                        variant="h4"
                      >
                        Fun. Like a game.
                      </Text>
                      <Text
                        className="text-black_900 text-left w-full"
                        variant="body3"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, turpis vitae hendrerit facilisis, ligula erat maximus urna, ut congue nibh erat tempor enim. Quisque vitae nisl dolor. Duis a sapien sit amet justo iaculis sollicitudin. Integer ac augue eros. In egestas volutpat suscipit. 
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  // className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start mt-[50px] md:px-10 sm:px-5 px-[50px] mr-auto ml-auto w-[100%]"
                  className="flex md:flex-col flex-row mt-[50px] md:gap-10 items-center justify-between ml-auto mr-auto w-[100%] h-[400px] md:w-full"
                  style={{
                  backgroundImage: "url('images/img_group33.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "25px"
                  }}
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-auto mr-auto w-[80%] md:w-full">
                    <div style={{ maxWidth: "350px"}} className="flex flex-col items-center w-auto md:w-full ml-12">
                      <Text
                        className="text-black_900 text-left w-full mb-4"
                        as="h4"
                        variant="h4"
                      >
                        Social. Like a party.
                      </Text>
                      <Text
                        className="text-black_900 text-left w-full"
                        variant="body3"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, turpis vitae hendrerit facilisis, ligula erat maximus urna, ut congue nibh erat tempor enim. Quisque vitae nisl dolor. Duis a sapien sit amet justo iaculis sollicitudin. Integer ac augue eros. In egestas volutpat suscipit. 
                      </Text>
                    </div>
                    <Img
                      id ="target"
                      src="images/img_landingpageoverview2.svg"
                      className="h-[300px] w-auto"
                      alt="illustrationlan_Two"
                      style={{ maxWidth: "350px"}}
                    />
                  </div>
                </div>
                <div
                  // className="bg-cover bg-no-repeat flex flex-col h-[480px] items-center justify-start mt-[50px] md:px-10 sm:px-5 px-[50px] mr-auto ml-auto w-[100%]"
                  className="flex md:flex-col flex-row mt-[50px] md:gap-10 items-center justify-between ml-auto mr-auto w-[100%] h-[400px] md:w-full"
                  style={{
                  backgroundImage: "url('images/img_group33.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "25px"
                  }}
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-auto mr-auto w-[80%] md:w-full">
                    <Img
                      id ="target"
                      src="images/img_landingpageoverview3.svg"
                      className="h-[300px] w-auto"
                      alt="illustrationlan_Two"
                      style={{maxWidth: "350px", marginLeft: "70px"}}
                    />
                    <div style={{ maxWidth: "350px"}} className="flex flex-col items-center w-auto md:w-full ml-12">
                      <Text
                        className="text-black_900 text-left w-full mb-4"
                        as="h4"
                        variant="h4"
                      >
                        Compact. Like a TikTok.
                      </Text>
                      <Text
                        className="text-black_900 text-left w-full"
                        variant="body3"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, turpis vitae hendrerit facilisis, ligula erat maximus urna, ut congue nibh erat tempor enim. Quisque vitae nisl dolor. Duis a sapien sit amet justo iaculis sollicitudin. Integer ac augue eros. In egestas volutpat suscipit. 
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_901 flex flex-col items-center justify-start pb-[50px] w-[100%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start max-w-[1240px] mx-auto md:px-10 w-full">
                  <Text
                    className="text-left text-white_A700 w-full"
                    variant="body5"
                    style={{ marginTop: '20px' }}
                  >
                    The future of news and knowledge.
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[216px] mt-[59px] w-auto"
                    onClick={() => navigate("/waitlist")}
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillOrangeA100"
                  >
                    <div className="font-medium md:text-[22px] sm:text-xl text-2xl text-black_900 text-center">
                      Join waitlist
                    </div>
                  </Button>
                  <Line className="bg-gray_105 h-0.5 mt-[105px] w-full" />
                  <div className="flex flex-row md:gap-10 items-center justify-between mt-[15px] w-full">
                    <div className="flex flex-row items-end justify-between w-[17%]">
                      <Text
                        className="mb-0.5 mt-[5px] text-left text-white_A700 w-auto"
                        variant="body2"
                      >
                        Follow us on
                      </Text>
                      <a href="https://www.instagram.com/newsinpoint/" target="_blank">
                        <Img
                          src="images/img_instagramglyphwhite.png"
                          className="h-[29px] md:h-auto object-cover w-[30px]"
                          alt="instagramglyphw"
                        />
                      </a>
                      <a href="http://chat.whatsapp.com/Hqitid1Gr958cCfOJNzhCD" target="_blank">
                        <Img
                          src="images/img_digitalglyphwhite.png"
                          className="h-[30px] md:h-auto object-cover w-[30px]"
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
                    className="h-[52px] md:h-auto mt-1.5 object-cover w-auto sm:w-full"
                    alt="googleplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;