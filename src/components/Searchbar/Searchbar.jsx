import React from 'react';
import "./Searchbar.css"
export const Searchbar = () => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            name = "name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            nameInput = ""
            value =""
          />
        </form>
      </header>
    </>
  );
};