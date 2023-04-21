import logo from "./logo.svg";
import Gallery from "./js/Gallery";
import "./css/App.css";
import DynamicTypist from "./js/DynamicTypist";

const galleryImgs = [
  {
    img: require("./img/gallery/15650008-edited.png"),
  },
  {
    img: require("./img/gallery/chicago-edited.jpg"),
  },
  {
    img: require("./img/gallery/fatherson-edited.jpg"),
  },
  {
    img: require("./img/gallery/tuilips026-edited.jpg"),
  },
  {
    img: require("./img/gallery/fluffy-edited.jpg"),
  },
  {
    img: require("./img/gallery/hoian-edited.jpg"),
  },
  {
    img: require("./img/gallery/mtrainer-edited.jpg"),
  },
  {
    img: require("./img/gallery/seattletraffic.JPG"),
  },
  {
    img: require("./img/gallery/presidentpalace-edited.jpg"),
  },
  {
    img: require("./img/gallery/thevessel-edited.jpg"),
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
          <div>
            <strong>franchine ninh</strong>
          </div>
          <br />
          <br />

          <Gallery galleryImgs={galleryImgs} />

          <br />
          <br />
          <div>hellohello</div>
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
