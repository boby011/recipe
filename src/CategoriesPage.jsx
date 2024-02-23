
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import { Popular } from './Popular';
import { Link } from 'react-router-dom';
import { Grids } from './Grids';

export const CategoriesPage = () => {
  return (
    <div>
      <Popular title="Categories" />
            <Grids />
    </div>
  );
};

