import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayPlatformStats from "./Components/DisplayPlatformStats/DisplayPlatformStats";
import VideoGameTable from "./Components/VideoGameTable/VideoGameTable";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container.js';

function App() {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames() {
    const response = await axios.get("http://localhost:8080/all/");
    setVideoGames(response.data);
  }

  return (
    <div>
      {/* <Navbar bg='light' fixed='top'>
        <Container>
          <Navbar.Brand>GameInfo</Navbar.Brand>
        </Container>
      </Navbar> */}
      <div>
        <DisplayPlatformStats videoGames={videoGames} />
        <VideoGameTable videoGames={videoGames} />
      </div>
    </div>
  );
}

export default App;
