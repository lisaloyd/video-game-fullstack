import React, { useState } from "react";
const SearchBar = ({onSubmit}) => {
    const [searchKeyword, setSearchKeyword] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(SearchKeyword);
    };
    return (
        <form onSubmit={handleSubmit} className="search">
            <label>
                Game Search
            </label>
            <div className='searchInputs'>
                <input>
                type="text"
                onChange={(event)} => setSearchKeyword(event.target.value)}
                value={searchKeyword}
    
                </input>
            </div>
        </form>
    )
}
