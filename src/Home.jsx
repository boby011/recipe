import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import { Popular } from './Popular';
import { Grids } from './Grids';
import homeimage from './home.jpg';

export const Home = () => {
    const item = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <Image src={homeimage} style={{ width: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div style={item}>
                        <h1 className='headingStyle'>Find recipes for every occasion</h1>
                        <h1 className='headingStyle'>Cooking never was easier</h1>
                        <button className='homebtn mt-3'>Search your recipes</button>
                    </div>
                </div>
            </div>
            <Popular title="Categories" />
            <Grids />
        </div>
    );
};


