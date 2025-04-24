import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import Gallery from "../js/Gallery";
import "../css/Home.css";

const galleryImgs = [
  {
    img: require("../img/gallery/seattle-traffic.JPG"),
    alt: "seattle traffic",
    title: "seattle traffic",
  },
  {
    img: require("../img/gallery/foggy-lake.JPG"),
    alt: "kennewick foggy lake",
    title: "kennewick foggy lake",
  },
  {
    img: require("../img/gallery/hoi-an-lotus.JPG"),
    alt: "hoi an lotus",
    title: "hoi an lotus",
  },
  {
    img: require("../img/gallery/iowa-fatherson.jpg"),
    alt: "iowa father and son",
    title: "iowa father and son",
  },
  {
    img: require("../img/gallery/saigon-traffic.JPG"),
    alt: "saigon traffic",
    title: "saigon traffic",
  },
  {
    img: require("../img/gallery/golden-mtrainer.jpg"),
    alt: "golden mount rainier",
    title: "golden mount rainierr",
  },
  {
    img: require("../img/gallery/saigon-president-palace.jpg"),
    alt: "saigon president palace",
    title: "saigon president palace",
  },
  {
    img: require("../img/gallery/bathroom-tulips.jpg"),
    alt: "bathroom tulips",
    title: "bathroom tulips",
  },
  {
    img: require("../img/gallery/washington-state-ferris-wheel.jpg"),
    alt: "washington state ferris wheel",
    title: "washington state ferris wheel",
  },
  {
    img: require("../img/gallery/thevessel.jpg"),
    alt: "the vessel",
    title: "the vessel",
  },
  {
    img: require("../img/gallery/golden-stairs.JPG"),
    alt: "la golden stairs",
    title: "la golden stairs",
  },
  {
    img: require("../img/gallery/pnw-beach.jpg"),
    alt: "pnw beach",
    title: "pnw beach",
  },
  {
    img: require("../img/gallery/night-chicago-lake-mich.jpg"),
    alt: "night chicago lake michigan",
    title: "night chicago lake michigan",
  },
  {
    img: require("../img/gallery/honolulu-trees.jpg"),
    alt: "honolulu trees",
    title: "honolulu trees",
  },
  {
    img: require("../img/gallery/up-forest.jpg"),
    alt: "japanese gulch up forest",
    title: "japanese gulch up forest",
  },
  {
    img: require("../img/gallery/night-hoi-an.JPG"),
    alt: "night hoi an",
    title: "night hoi an",
  },
  // {
  //   img: require("./img/gallery/"),
  // },
];

function Home() {
  return (
    <div className="home">
      {/* <Link to="/" className="nameTitle">
        franchine ninh
      </Link> */}
      <h1 className="nameTitle">franchine ninh</h1>
      <Gallery galleryImgs={galleryImgs} />
      <br />
      <br />
      <div></div>
      <div className="bottomHeader">
        <div className="bottomText">
          <strong>© 2025 franchine ninh. all rights reserved.</strong>
        </div>
      </div>
    </div>
  );
}

export default Home;
