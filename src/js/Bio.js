import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

import profileImage from "../img/profile/profile.jpg";
import "../css/Bio.css";

function Bio() {
  return (
    <div className="bio">
      <div className="info">
        <img src={profileImage} alt="profile-pic" className="profile-image" />
        <div className="text">
          <p>
            franchine ninh is a full-time coder who finds a creative outlet in
            film photography. this website showcases her photographic
            explorations of nature, urban settings, and the intersections
            between them. she received her bfa in photography and bs in computer
            science from western washington university.
          </p>
        </div>
      </div>
      <div className="bottomHeader">
        <div className="bottomSocial">
          <FontAwesomeIcon
            className="socialIcon"
            icon={faGithub}
            onClick={() => {
              window.location.href = "https://github.com/franchine";
            }}
          />
          <FontAwesomeIcon
            className="socialIcon"
            icon={faInstagram}
            onClick={() => {
              window.location.href = "https://www.instagram.com/franchineninh";
            }}
          />
          <FontAwesomeIcon
            className="socialIcon"
            icon={faLinkedin}
            onClick={() => {
              window.location.href =
                "[https://www.linkedin.com/in/franchineninh";
            }}
          />
        </div>

        <div className="bottomText">
          <strong>© 2025 franchine ninh. all rights reserved.</strong>
        </div>
      </div>
    </div>
  );
}

export default Bio;
