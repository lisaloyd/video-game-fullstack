import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({ videoGames=[] }) => {
  function generateDataFormChart() {
    //Filter the video game by year
    let filteredGames = videoGames.filter((game) => game.year >= 2013);

    

    let platforms = filteredGames.map((game) => {
      return game.platform;
    });

    let distinctPlatforms = [...new Set(platforms)];

    let platformArrays = distinctPlatforms.map((platform) => {
      
   
     let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);

     let globalSalesForPlatform = allGamesForPlatform.reduce( (total,game) => total + game.globalsales, 0)


     //now we need to loop through allGamesForPlatform and sum each games global sales

    // Once we have the sum of all of those games global sales inserit it where '10' is
     return [platform, globalSalesForPlatform, "silver"]
    }); 

    const data = [
                ["Platform", "Sales", { role: "style" }], 
                ...platformArrays
            ];
        
    
    return data;
  }

  return (
    <div>
      <h1>Platform By Global Sales in Millions</h1>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={generateDataFormChart()}
      />
    </div>
  );
};

export default DisplayPlatformStats;
