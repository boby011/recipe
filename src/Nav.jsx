import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './App.css'

export const Nav = () => {
  return (
    <>
      <div className='nav'>
      
          <div className='head'>
            <h2>B Recipe Finder</h2>
          </div>

          <div className='list'>
          <Link to='/'><span style={{color:'black'}}>Home</span></Link>
          <Link to='/about'> <span style={{color:'black'}}>All items</span></Link>
          <Link to='/work'><span style={{color:'black'}}>Favorite</span></Link>
          <Link to='/contact'> <span style={{color:'black'}}>Country</span></Link>
          </div>
        
      </div>
      
      <Outlet />
    </>
  );
};
