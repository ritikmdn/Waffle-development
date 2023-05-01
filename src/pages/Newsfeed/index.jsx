import React from "react";

import LandingPageNavbar from "components/LandingPageNavbar";
import { List, Text, Img, Button, Line } from "components";

const NewsfeedPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-helveticaneue items-center justify-start mx-auto w-full">
        <div className="bg-gray_300 flex flex-col items-center justify-start p-[42px] md:px-10 sm:px-5 w-full">
          <LandingPageNavbar
            className="bg-gray_200 flex flex-row items-center justify-end mx-auto p-[9px] md:px-5 rounded-[10px] w-[39%] md:w-full"
            waffle="Waffle."
            product="Product"
            readnews="Read News"
            joinWaitlist="Join waitlist"
          />
        </div>
        <List
          className="flex-col gap-[55px] grid items-center max-w-[1235px] mt-[55px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="bg-gray_105 flex flex-1 flex-col items-center justify-start p-2.5 rounded-lg w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[25px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    #Finance
                  </Text>
                </div>
                <Img
                  src="images/img_upload.svg"
                  className="h-[42px] w-[42px]"
                  alt="upload"
                />
              </div>
              <div className="flex flex-col gap-[52px] items-center justify-start w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                  <Img
                    src="images/img_rectangle.png"
                    className="md:flex-1 h-[243px] sm:h-auto object-cover rounded-lg w-auto md:w-full"
                    alt="rectangle"
                  />
                  <div className="flex md:flex-1 flex-col gap-[23px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="leading-[111.84%] text-black_900 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      Graduates from ‘fancy colleges in US’ moving back to
                      India: Nikhil Kamath
                    </Text>
                    <Text
                      className="font-normal leading-[140.00%] text-black_900 text-left"
                      variant="body1"
                    >
                      <>
                        Wemet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Wemet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. <br />
                        Wemet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start p-1 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[29px] w-[98%] md:w-full">
                    <Text
                      className="font-bold text-gray_401 text-left tracking-[-0.30px] w-auto"
                      variant="body3"
                    >
                      OPINION POLL
                    </Text>
                    <div className="flex md:flex-col flex-row font-helveticaneue md:gap-5 items-start justify-start w-full">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.30px] w-auto"
                        variant="body1"
                      >
                        Will AAP win more than 10 seats in Lok Sabha elections?
                      </Text>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[151px] w-[14%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[155px] text-bluegray_801 text-center text-sm w-auto"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillBluegray80026"
                        >
                          Yes
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] w-[14%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[155px] text-center text-red_300 text-sm w-auto"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillRed40026"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_105 flex flex-1 flex-col items-center justify-start p-2.5 rounded-lg w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[25px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    #Finance
                  </Text>
                </div>
                <Img
                  src="images/img_upload.svg"
                  className="h-[42px] w-[42px]"
                  alt="upload"
                />
              </div>
              <div className="flex flex-col gap-[52px] items-center justify-start w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                  <Img
                    src="images/img_rectangle.png"
                    className="md:flex-1 h-[243px] sm:h-auto object-cover rounded-lg w-auto md:w-full"
                    alt="rectangle"
                  />
                  <div className="flex md:flex-1 flex-col gap-[23px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="leading-[111.84%] text-black_900 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      Graduates from ‘fancy colleges in US’ moving back to
                      India: Nikhil Kamath
                    </Text>
                    <Text
                      className="font-normal leading-[140.00%] text-black_900 text-left"
                      variant="body1"
                    >
                      <>
                        Wemet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Wemet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. <br />
                        Wemet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start p-1 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[29px] w-[98%] md:w-full">
                    <Text
                      className="font-bold text-gray_401 text-left tracking-[-0.30px] w-auto"
                      variant="body3"
                    >
                      OPINION POLL
                    </Text>
                    <div className="flex md:flex-col flex-row font-helveticaneue md:gap-5 items-start justify-start w-full">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.30px] w-auto"
                        variant="body1"
                      >
                        Will AAP win more than 10 seats in Lok Sabha elections?
                      </Text>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[151px] w-[14%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[155px] text-bluegray_801 text-center text-sm w-auto"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillBluegray80026"
                        >
                          Yes
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] w-[14%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[155px] text-center text-red_300 text-sm w-auto"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillRed40026"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_105 flex flex-1 flex-col items-center justify-start p-2.5 rounded-lg w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[25px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    #Finance
                  </Text>
                </div>
                <Img
                  src="images/img_upload.svg"
                  className="h-[42px] w-[42px]"
                  alt="upload"
                />
              </div>
              <div className="flex flex-col gap-[52px] items-center justify-start w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                  <Img
                    src="images/img_rectangle.png"
                    className="md:flex-1 h-[243px] sm:h-auto object-cover rounded-lg w-auto md:w-full"
                    alt="rectangle"
                  />
                  <div className="flex md:flex-1 flex-col gap-[23px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="leading-[111.84%] text-black_900 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      Graduates from ‘fancy colleges in US’ moving back to
                      India: Nikhil Kamath
                    </Text>
                    <Text
                      className="font-normal leading-[140.00%] text-black_900 text-left"
                      variant="body1"
                    >
                      <>
                        Wemet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. Wemet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. <br />
                        Wemet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start p-1 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[29px] w-[98%] md:w-full">
                    <Text
                      className="font-bold text-gray_401 text-left tracking-[-0.30px] w-auto"
                      variant="body3"
                    >
                      OPINION POLL
                    </Text>
                    <div className="flex md:flex-col flex-row font-helveticaneue md:gap-5 items-start justify-start w-full">
                      <Text
                        className="font-bold text-black_900 text-left tracking-[-0.30px] w-auto"
                        variant="body1"
                      >
                        Will AAP win more than 10 seats in Lok Sabha elections?
                      </Text>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[151px] w-[14%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[155px] text-bluegray_801 text-center text-sm w-auto"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillBluegray80026"
                        >
                          Yes
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] w-[14%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[155px] text-center text-red_300 text-sm w-auto"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillRed40026"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="bg-bluegray_901 flex flex-col items-center justify-start mt-[90px] p-24 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1240px] mx-auto w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Line className="bg-gray_105 h-0.5 w-full" />
              <div className="flex flex-row md:gap-10 items-center justify-between mt-[15px] w-full">
                <div className="flex flex-row items-end justify-between w-[17%]">
                  <Text
                    className="mb-0.5 mt-[5px] text-left text-white_A700 w-auto"
                    variant="body2"
                  >
                    Follow us on
                  </Text>
                  <Img
                    src="images/img_instagramglyphwhite.png"
                    className="h-[29px] md:h-auto object-cover w-[30px]"
                    alt="instagramglyphw"
                  />
                  <Img
                    src="images/img_digitalglyphwhite.png"
                    className="h-[30px] md:h-auto object-cover w-[30px]"
                    alt="digitalglyphwhi"
                  />
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
    </>
  );
};

export default NewsfeedPage;
