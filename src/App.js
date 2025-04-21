import Gallery from "./js/Gallery";
import "./css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const galleryImgs = [
  {
    img: require("./img/gallery/seattle-traffic.JPG"),
  },
  {
    img: require("./img/gallery/foggy-lake.JPG"),
  },
  {
    img: require("./img/gallery/hoi-an-lotus.JPG"),
  },
  {
    img: require("./img/gallery/iowa-fatherson.jpg"),
  },
  {
    img: require("./img/gallery/saigon-traffic.JPG"),
  },
  {
    img: require("./img/gallery/golden-mtrainer.jpg"),
  },
  {
    img: require("./img/gallery/saigon-president-palace.jpg"),
  },
  {
    img: require("./img/gallery/bathroom-tulips.jpg"),
  },
  {
    img: require("./img/gallery/washington-state-ferris-wheel.jpg"),
  },
  {
    img: require("./img/gallery/thevessel.jpg"),
  },
  {
    img: require("./img/gallery/golden-stairs.JPG"),
  },
  {
    img: require("./img/gallery/pnw-beach.jpg"),
  },
   {
    img: require("./img/gallery/night-chicago-lake-mich.jpg"),
  },
  {
    img: require("./img/gallery/honolulu-trees.jpg"),
  },
  {
    img: require("./img/gallery/up-forest.jpg"),
  },
  {
    img: require("./img/gallery/night-hoi-an.JPG"),
  },
  // {
  //   img: require("./img/gallery/"),
  // },
];

function App() {
  return (
    <>
      {
        <div className="App">
          <br />
          <br />
          <div className="nameTitle">
            <strong>franchine ninh</strong>
          </div>
          <br />
          <br />
          <Gallery galleryImgs={galleryImgs} />
          <br />
          <br />
          <div></div>
          <div className="bottomHeader">
            <FontAwesomeIcon
              className="bottonSocial"
              icon={faInstagram}
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/franchineninh";
              }}
            />
            <br />
            <br />
            <strong>© 2025 franchine ninh. all rights reserved.</strong>
          </div>
          <br />
          <br />
        </div>
      }
    </>
  );
}

export default App;
