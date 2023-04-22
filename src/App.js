import Gallery from "./js/Gallery";
import "./css/App.css";

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
  // {
  //   img: require("./img/gallery/15650008-edited.png"),
  // },
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
          <div className="nameTitle">
            <strong>franchine ninh</strong>
          </div>
          <br />
          <br />

          <Gallery galleryImgs={galleryImgs} />

          <br />
          <br />
          <div></div>
        </div>

        /* <div className="backgroundImg">
        <header className="App-header">
          franchine ninh <br></br>
          <DynamicTypist />
        </header>
      </div> */
      }
    </>
  );
}

export default App;
