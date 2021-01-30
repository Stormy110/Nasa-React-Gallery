import { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./Components/Gallery";
import SearchButton from "./Components/SearchButton";
import Home from "./Components/Home";
import About from "./Components/About";
import Clear from "./Components/Clear";
import SpaceCard from "./Components/SpaceCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchOneButton from "./Components/SearchOne";
import video1 from './Video.mp4';
import Video from './Components/Video';


function App() {
  const [spaceData, setSpaceData] = useState([]);
  const [spacePic, setSpacePic] = useState({});
  
  const fetchRandomSpacePic = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=C3yjd5BYzzZLKfXmIwEGAatNghbRxXEreaaPIR14&count=1"
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        console.log(data);
        setSpacePic(data)
      });
  };

  useEffect(fetchRandomSpacePic, [])

  const fetchSpacePicGallery = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=C3yjd5BYzzZLKfXmIwEGAatNghbRxXEreaaPIR14&count=20"
    )
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        console.log(data);
        let results = [...spaceData, data];
        console.log(results)
        setSpaceData(results);
      });
  };

  const clearPics = () => {
    setSpaceData([]);
  };

  return (
    <Router>
      <Video video={video1}/>
      <nav className="nav-bar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/space-fact">
          <button>Random Space Fact</button>
        </Link>
        <Link to="/pictures">
          <button>Space Gallery</button>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/space-fact">
          <div className="space-card">
            <br/>
          <SearchOneButton fetchRandomSpacePic={fetchRandomSpacePic} />
          <SpaceCard spacePic={spacePic}/>
          </div>
        </Route>
        <Route path="/pictures">
          <br/>
          <div className="gallery-buttons">
          <SearchButton fetchSpacePicGallery={fetchSpacePicGallery} />
          <Clear clearPics={clearPics} />
          </div>
          <Gallery
            fetchSpacePicGallery={fetchSpacePicGallery}
            spaceData={spaceData}
          />
        </Route>
        <Route path="*">
          <h2>Page not found</h2>
          <Link to="/">Click here to go Home.</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
