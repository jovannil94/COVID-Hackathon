import React from "react";
import "../../CSS/Bio.css";
import ourLogo from "../../Images/ourLogo.png";

const Bio = () => {
  return (
    <>
      <img src={ourLogo} alt="logo" />
      <div className="bio">
        <div className="bioparagraph">
          <div className="bioDivs">
            <h2 className="titleTwit-name">Jovanni Luna</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jovanni-luna-5831bb118/"
            >
              <p className="linked">Linkedin</p>
            </a>
            <p>
              Transitioning from one career to become a great Web Developer.
            </p>
          </div>
          <div className="bioDivs">
            <h2 className="titleTwit-name">Maria Martinez</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/marializamartinez/"
            >
              <p className="linked">Linkedin</p>
            </a>
            <p>
              NYU grad with a bachelor of fine arts degree in animation, turned
              baker, turned chocolatier, looking to land her first job in video
              game development!
            </p>
          </div>

          <div className="bioDivs">
            <h2 className="titleTwit-name">Deja Flynn</h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/deja-flynn-991058192/"
            >
              <p className="linked">Linkedin</p>
            </a>
            <p>
              Former math and science teacher aspiring for a new career in
              Computer Science/Full-Stack Web Development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
