import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ searchChange }) => {
    return (
        <input className='search-bar' type='search' placeholder='Search bots...' onChange={searchChange} />
    );
}

export default SearchBar;