import React, { useState } from 'react';
import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./LandingPageNavbar.css"
import { Link } from "react-router-dom";
import ScrollToHash from 'components/ScrollToHash';

const LandingPageNavbar = (props) => {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const generateKey = () => Math.random().toString(36).substr(2, 9);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleProductClick = () => {
    navigate("/");
    props.bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const navbarClass = navbarOpen ? "navbar navbar-vertical" : "navbar";
  const productClass = navbarOpen ? "navbar-product navbar-child-visible" : "navbar-product";
  const newsClass = navbarOpen ? "navbar-news navbar-child-visible" : "navbar-news";

  return (
    <>
      <div className="navbar-container">
        <div className={navbarClass}>
          <div className="navbar-toggle" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="navbar-logo" onClick={() => navigate("/")}>
            <Img
              src="images/img_image1.png"
              className="h-9 md:h-auto object-cover w-[37px]"
              alt="imageOne"
            />
            <Text as="h6" variant="h6">
              {props?.waffle}
            </Text>
          </div>
          <div className={productClass}>
            <Link 
              to={{pathname: "/", hash: "#product"}}
              onClick={() => <ScrollToHash key={generateKey()}/>}
            >
              {props?.product}
            </Link>
          </div>
          <div className={newsClass}>
            <Text variant="body3" onClick={() => navigate("/Newsfeed")}>
              {props?.readnews}
            </Text>
          </div>
          <Button
            className="navbar-button"
            onClick={() => navigate("/waitlist")}
            shape="RoundedBorder10"
            size="md"
            variant="FillOrangeA100"
          >
            {props?.joinWaitlist}
          </Button>
        </div>
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
