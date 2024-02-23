import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './App.css'; 

export const CountryItem = () => {
  const [items, setItems] = useState([]);
  const { area } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        console.log(response.data);
        setItems(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchdata();
  }, [area]);

  console.log("fggfh", items);

  return (
    <div style={{ marginTop: '150px', textAlign: 'center' }}>
      <h1>{area}</h1>
      <div className='wrapitems'>
        {items.map((meals1) => (
          <div className='menu' key={meals1.idMeal}>
            <div className='menuitems'>
              <img src={meals1.strMealThumb} alt="" />
              <h3>{meals1.strMeal}</h3>
              <Link to={`/ingredients/${meals1.idMeal}`} style={{ textDecoration: 'none' }}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



