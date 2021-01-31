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
import Video from './Components/Video';
import SpaceStation from './Components/SpaceStation';




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
      <Video />
      <nav className="nav-bar">
        <Link to="/">
          <button type="button" className="btn btn-dark">Home</button>
          
        </Link>
        <Link to="/about">
          <button type="button" className="btn btn-dark">About</button>
        </Link>
        <Link to="/space-fact">
          <button type="button" className="btn btn-dark">Random Space Image</button>
        </Link>
        <Link to="/pictures">
          <button type="button" className="btn btn-dark">Space Gallery</button>
        </Link>
        <Link to="/station-feed">
          <button type="button" className="btn btn-dark">ISS Station Feed</button>
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
        <Route path="/station-feed">
          <SpaceStation />
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
