import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const MenuItems = () => {

    const [items, setItems] = useState([])
    const { category } = useParams()

    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                console.log(response);
                setItems(response.data.meals || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [category])

    return (
        <div style={{ marginTop: '150px', textAlign: 'center' }}>
            <h1>{category}</h1>
            <div className='wrapitems'>
                {items.length > 0 ? (
                    items.map((item) => (
                        <div className='menu' key={item.idMeal}>
                            <div className='menuitems'>
                                <img src={item.strMealThumb} alt="" />
                                <h3>{item.strMeal}</h3>
                                <Link to={`/ingredients/${item.idMeal}`}>
                                    <button>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items found for {category}</p>
                )}
            </div>
        </div>
    )
}



