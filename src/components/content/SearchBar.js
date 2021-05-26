import React from 'react';

const SearchBar = (props) => {
    return (
        <input 
            id="appInput"
            placeholder="Enter Application No."
            value={props.inputAppNo}
            onChange={props.findAppNoOnChange}
        />
    )
}

export default SearchBar;