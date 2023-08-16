import Gallery from "./js/Gallery";
import "./css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const galleryImgs = [
  {
    img: require("./img/gallery/seattletraffic.JPG"),
  },
  {
    img: require("./img/gallery/chicago-edited.jpg"),
  },
  {
    img: require("./img/gallery/fatherson-edited.jpg"),
  },
  {
    img: require("./img/gallery/64630013-edited.JPG"),
  },
  {
    img: require("./img/gallery/fluffy-edited.jpg"),
  },
  {
    img: require("./img/gallery/64560013.JPG"),
  },
  {
    img: require("./img/gallery/mtrainer-edited.jpg"),
  },
  {
    img: require("./img/gallery/presidentpalace-edited.jpg"),
  },
  {
    img: require("./img/gallery/tuilips026-edited.jpg"),
  },
  {
    img: require("./img/gallery/thevessel-edited.jpg"),
  },
  {
    img: require("./img/gallery/Ninh411614-R1-063.jpg"),
  },
  {
    img: require("./img/gallery/hoian-edited.jpg"),
  },
  {
    img: require("./img/gallery/15650001.JPG"),
  },
  {
    img: require("./img/gallery/64520027.JPG"),
  },
  {
    img: require("./img/gallery/64570036.JPG"),
  },
  {
    img: require("./img/gallery/Ninh002239-R1-027-12-edited.jpg"),
  },
  {
    img: require("./img/gallery/64600034.JPG"),
  },
  {
    img: require("./img/gallery/15650028.JPG"),
  },
  {
    img: require("./img/gallery/Scan15808.jpg"),
  },
  {
    img: require("./img/gallery/Ninh002240-R1-047-22-edited.jpg"),
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
            <strong>© 2023 franchine ninh. all right reserved.</strong>
          </div>
          <br />
          <br />
        </div>
      }
    </>
  );
}

export default App;
