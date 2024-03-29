import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Nav } from './Nav';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home';
import { CategoriesPage } from './CategoriesPage';
import { Country } from './Country';
import { CountryItem } from './CountryItem';
import { MenuItem, MenuItems } from './MenuItems';
import { Ingredients } from './Ingredients';
import { Store } from './store';
import Favorites from './Favourite';
import { Allitems } from './Allitems';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='/cat' element={<CategoriesPage />}/>
          <Route path='/coun' element={<Country/>}/>
          <Route path='/countryitem/:area' element={<CountryItem/>}/>
          <Route path='/menuitems/:category' element={<MenuItems/>}/>
          <Route path='/ingredients/:mealId' element={<Ingredients/>}/>
          <Route path='/ai' element={<Allitems/>}/>
          <Route path='/fav' element={<Favorites/>}/>
        </Route>


        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
