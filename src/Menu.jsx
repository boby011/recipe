import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                console.log(response);
                setCategories(response.data.categories);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchdata();
    }, []);

    console.log(categories);

    return (
        <div className='mt-5'>
            <h1>Categories</h1>
            <div className='wrapitems'>
                {categories.map((category) => (
                    <div className='menu' key={category.idCategory}>
                        <Link to={`/menuitems/${category.strCategory}`} style={{ textDecoration: 'none' }}>
                            <img src={category.strCategoryThumb} alt={category.strCategory} />
                            <h3>{category.strCategory}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};



