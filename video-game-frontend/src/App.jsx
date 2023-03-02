import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import VideoGameTable from './Components/VideoGameTable/VideoGameTable';


function App() {

const [videoGames, setVideoGames] = useState([]);

useEffect (() => {
  getVideoGames();
}, []);

async function getVideoGames() {
 
  
    const response = await axios.get('http://localhost:8080/all/');
    setVideoGames(response.data); 

  }


  return (
    <div>
        <DisplayPlatformStats videoGames={videoGames}/>
        <VideoGameTable videoGames={videoGames}/>
        
    </div>
  );
}

export default App;
