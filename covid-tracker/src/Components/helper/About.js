import React from "react";
import "../../CSS/About.css";

const About = () => {
  return (
    <>
      <div className="paragraph">
        <h1 className="titleTwit">About Covid Near Us</h1>
        <p>

          The Covid Near Us App is a quick solution to the person who needs to
          travel and keeps them informed about each state in one app. 
          <br></br>
          <br></br>
          
          When launched immediately shows Covid-19 stats for the United States. It
          offers a search by state on the landing page. Once a state has been
          selected, the user is taken to the search result page that gives
          hospitalization stats, infected cases, recovered cases, icu numbers
          and deaths. Also below the search results you can find a testing site
          “near us” to send the user to a testing site using geolocation. Once
          the area is selected then the user is taken to the Testing site in
          that location for 3 sites that have testing options for that user. It
          gives the user the address and phone number to contact testing
          facilities.
        </p>
      </div>
    </>
  );
};

export default About;
