import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const MostPopularPlatform = ({ videoGames }) => {
    function displayPopularPlatform () {

        let gamesIn2015 = videoGames.filter((game) => game.year === 2015);
        // console.log('Games in 2015:', gamesIn2015);

        let newPlatforms = gamesIn2015.map((game) => {
            return game.platform;
        });
        // console.log('New Platforms:', newPlatforms);
        let uniqueNewPlatforms = [...new Set(newPlatforms)];
        //  console.log('uniqueNewPlatforms:', uniqueNewPlatforms);

        let platformArrays2015 = uniqueNewPlatforms.map((platform) => {

            let allGamesFor2015Platform = gamesIn2015.filter(game => game.platform == platform);

            let mostPopularPlatform2015 = allGamesFor2015Platform.reduce((total,game) => total + game.globalsales, 0)
         return [platform, mostPopularPlatform2015, "blue"]   
        });

        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays2015
        ];

        return data;
    }

    return (
        <div>
            <h1>Most Popular Platform For Gaming in 2015</h1>
            <Chart
               chartType="ColumnChart"
               width="100%"
               height="400px"
               data={displayPopularPlatform()}
            />
        </div>
    );
}
 
export default MostPopularPlatform;