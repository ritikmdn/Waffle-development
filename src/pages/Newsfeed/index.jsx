import React from "react";

import LandingPageNavbar from "components/LandingPageNavbar";
import { List, Text, Img, Button, Line } from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import "./Newsfeed.css"

const NewsfeedPage = () => {
  return (
    <>
      <div className="page-container">
          <LandingPageNavbar
            waffle="Waffle."
            product="Product"
            readnews="Read News"
            joinWaitlist="Join waitlist"
          />
        <List
          className="list"
          orientation="vertical"
        >
          <div className="news-box">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text className="category-text">
                    #Finance
                  </Text>
                  <button className="share-icon">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
              </div>
              <div className="content-box">
                <Img
                  src="https://live.staticflickr.com/65535/52870592824_6f51d52ccb.jpg"
                  className="article-image"
                  alt="rectangle"
                />
                <div className="article-text">
                  <Text
                    className="article-text-headline"
                  >
                    Graduates from ‘fancy colleges in US’ moving back to
                    India: Nikhil Kamath
                  </Text>
                  <Text
                    className="article-text-content"
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
              <div className="opinion-poll-box">
                <Text
                  className="font-bold text-gray_401 text-left tracking-[-0.30px] w-auto"
                  variant="body4"
                >
                  OPINION POLL
                </Text>
                <div className="opinion-poll-question">
                  <Text>
                    Will AAP win more than 10 seats in Lok Sabha elections? Are you sure and do you really wanna guess?
                  </Text>
                  <div className="poll-options-box">
                      <Button className="options"> Yes </Button>
                      <Button className="options"> No </Button>
                      <Button className="options"> Maybe </Button>
                  </div>
                </div>
              </div>
          </div>
        </List>
        <div className="page-bottom-down">
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
    </>
  );
};

export default NewsfeedPage;