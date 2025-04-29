import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useRef, useCallback } from "react";

import profileImage from "../img/profile/profile.jpg";
import "../css/Bio.css";

function Bio() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileModalRef = useRef(null);

  const handleOpenProfile = useCallback(() => {
    setIsProfileOpen(true);
  }, []);

  const handleCloseProfile = useCallback(() => {
    setIsProfileOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isProfileOpen) return;

      if (e.key === "Escape") {
        handleCloseProfile();
      }
    },
    [isProfileOpen, handleOpenProfile, handleCloseProfile]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="bio">
      {isProfileOpen && (
        <div
          className="profileWrap"
          ref={profileModalRef}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
          onClick={(e) => {
            if (e.target === profileModalRef.current) {
              handleCloseProfile();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              handleCloseProfile();
            }
          }}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseProfile}
            aria-label="close profile image"
          />
          <div className="fullScreenImage">
            <img src={profileImage} alt="full-size profile-pic" />
          </div>
        </div>
      )}
      <div className="info">
        <img
          src={profileImage}
          alt="profile-pic"
          className="profile-image"
          onClick={handleOpenProfile}
          style={{ cursor: "pointer" }}
        />
        <div className="text">
          <p>
            based in the pnw, franchine ninh is a coder who finds a creative
            outlet in film photography. this website showcases her photographic
            explorations of nature, urban settings, and the intersections
            between them. she earned her ba in photography and bs in computer
            science at western washington university. if you're interested in
            collaborating or just want to say hi, please feel free to reach out!
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
                "https://www.linkedin.com/in/franchineninh";
            }}
          />
        </div>
        <div className="bottomText">© 2025 franchine ninh</div>
      </div>
    </div>
  );
}

export default Bio;
