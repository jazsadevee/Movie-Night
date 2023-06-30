import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { Routes, Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import TvShows from './TvShows'
import Trending from './Trending'
import '../Styles/NavBarStyle.css'

export const Container = React.createContext()

function Navbar() {
  const [toggle, setToggle] = useState(true)
  const [inputValue, setInputValue] = useState('')
  return (
    <Container.Provider value={{ toggle, inputValue }}>
      <Fragment>
        <nav className={toggle ? '' : 'navBarColor'}>
          <div className='nav-options'>
            <h1 id={toggle ? '' : 'heading'}>Movie Night</h1>
            <NavLink to="" style={({ isActive }) => { return { color: isActive ? '#fff' : 'red' } }}>
              <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
            </NavLink>
            <NavLink to="/TvShows" style={({ isActive }) => { return { color: isActive ? '#fff' : 'red' } }}>
              <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
            </NavLink>
            <NavLink to="/Trending" style={({ isActive }) => { return { color: isActive ? '#fff' : 'red' } }}>
              <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
            </NavLink>
          </div>
          <div className='input-group'>
            <input type='text' placeholder='Search What To Watch' onChange={(e) => setInputValue(e.target.value)} />
            <HiSearch fontSize={21} color='black' id='search' />
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='' element={<Movies />} />
          <Route path='TvShows' element={<TvShows />} />
          <Route path='Trending' element={<Trending />} />
        </Routes>
      </Fragment>
    </Container.Provider>
  )
}

export default Navbar