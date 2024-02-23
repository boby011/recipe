

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css'; 

export const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        console.log(response);
        setCountry(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchdata();
  }, []);

  console.log("hhh", country);

  return (
    <div style={{ margin: '150px' , textAlign:'center' }}>
      <h1>Country</h1>
      <div className='wrapitems'>
        {country.map((area, index) => (
          <div key={index} className='country-box'>
            <div>
              <Link to={`/countryitem/${area.strArea}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div>
                  {area.strArea}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


