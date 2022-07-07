import React from 'react';
import './styles.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className='searchbar'>
      <SearchIcon style={{ color: "grey" }}/>
      <input type="text" />
    </div>
  )
}

export default SearchBar;
