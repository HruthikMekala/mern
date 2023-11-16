import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library/library';

import Trending from '../trending/trending';
import Player from '../player/player';
import Favourites from '../favourites/favourites';
import './home.css'
import Sidebar from '../../components/sidebar';
import Search from '../search/search';
// import '../../components/sidebar'
export default function Home() {
  return (
    <Router>
        <div className='main-body'>
          <Sidebar/>
        <Routes>
            <Route path="/" element={<Library/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/Favourites" element={<Favourites/>}/>
       </Routes>
        </div>
    </Router>
   
  );
}
