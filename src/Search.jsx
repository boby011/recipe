import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form } from "react-bootstrap";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setsearchdatas } from './DataSlice'

const Search = () => {
  const result = useSelector((state) => state.datastore.searchdatas);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState('');

  const change = (event) => {
    setSearchData(event.target.value);
    console.log(searchData);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}');
      console.log(response.data);
      dispatch(setsearchdatas(response.data.meals));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='search-bar'>
      <Container className="mt-5 searchalign">
        <Form className='widthform d-flex' onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 rounded-pill"
            aria-label="Search"
            onChange={change}
          />
          <Button type="submit" className="rounded-pill" variant="outline-primary">
            Search
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default Search
