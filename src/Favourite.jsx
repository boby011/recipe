import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { FaRegHeart } from 'react-icons/fa';

const Favorites = () => {
  // Get favorites from Redux store
  const favorites = useSelector((state) => state.datastore.fav);

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((favorite) => (
            <li key={favorite.mealId} className="favorite-item">
              <img src={favorite.image} alt={favorite.name} />
              <h3>{favorite.name}</h3>
              {/* You can add more details if needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet. Add some!</p>
      )}
      {/* You can add a button to clear favorites if needed */}
    </div>
  );
};

export default Favorites;
