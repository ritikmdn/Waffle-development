import React from "react";
import LandingPageNavbar from "components/LandingPageNavbar";

const NotFound = () => {
  return (
  <>
    <LandingPageNavbar
          waffle="Waffle."
          product="Product"
          readnews="Read News"
          joinWaitlist="Join waitlist"
    />
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontSize: '50px',
      textAlign: 'center'
    }}>
      Error 404: Page not found
    </div>
  </>
  );
};

export default NotFound;
