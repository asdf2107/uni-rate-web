import React from 'react';

function SearchBar(props) {
  return (
    <section className="utils">
      <input className="search-bar" type="text" placeholder="Enter university name..." maxLength="200"
        onKeyUp={() => props.textChanged(document.getElementsByClassName("search-bar")[0].value)}/>
    </section>
  )
}

export default SearchBar
