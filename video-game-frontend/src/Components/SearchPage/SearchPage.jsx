import React from 'react';
import React, { useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';



const SearchPage = ({videoGames}) => {
    const [games, setGames] = useState([]);

    let videoGameSearch = videoGames.map((game)=> {
        return game.name;
    });

        
    return (  
        <div>
            <SearchBar videoGames={videoGames}/>
        </div>
    );
}
 
export default SearchPage;