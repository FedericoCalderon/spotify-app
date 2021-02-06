import './NavBar.css';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getSongByQuery } from '../../redux/actions';

function NavBar() {
  
  const [search, setSearch] = useState('') 
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    if (!search.trim()) return;
    dispatch(getSongByQuery(search));
    document.getElementsByClassName("inp_navbar")[0].value = "";
  }
  return (
    <div>
      <nav className="navbar">
        <div className="div_icon">
          <a className="a_navbar" id="logo" href="/"><img src="https://i.pinimg.com/originals/09/4e/33/094e33276c5e6b4da287633670c9130a.png" alt=""/></a>
          <p className='title_app' >Northem Lights</p>
        </div>
        <div className="div_navbar" id="navbarSupportedContent">
          <form className="form_navbar">
            <input
              data-test="search-input"
              className="inp_navbar"
              type="search"
              placeholder="Search music"
              onChange={(e) =>{setSearch(e.target.value)}}
            />
            <button
            data-test="search-button"
            className="btn_navbar"
            type='submit'
            onClick={(e) => handleSearch(e)}
            // onKeyUp={(e) => e.key == 13 && handleSearch}
            >
              <img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/14-512.png" alt=""/>
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
