import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import { Popular } from './Popular';
import { Grids } from './Grids';
import homeimage from './hoom.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
    // const item = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
        
    // };

    return (
        <div>
        <div style={{ position: 'relative' }}>
          <Image src={homeimage} className='home-image' style={{ width: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className='ite'>
              <h1 className='headingStyle'>Whats Cooking?</h1>
              <p className='home-text'>Your own Cooking Resource.</p>
              <Link to='ai'><button className='homebtn mt-3'>Find recipes!</button></Link>
            </div>
          </div>
        </div>
      </div>
      
    );
};


