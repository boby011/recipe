import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardsearch from './Cardearch.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Popular from './Popular';

const Searchgrid = () => {
    const [data, setData] = useState([]);
    const result = useSelector((state) => state.datastore.searchdatas);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                console.log(response.data);
                setData(response.data.meals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // <-- Ensure the dependency array is closed properly

    if (!result || result.length === 0) {
        return (
            <div>
                <Container>
                    <Row className='alignrow'>
                        {data?.map((item) => (
                            <Col md="auto" className='mt-4'><Cardsearch image={item.strMealThumb} title={item.strMeal} cate={item.strCategory} id={item.idMeal} /></Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <Container>
                    <Row className='alignrow'>
                        {result.map((item) => (
                            <Col md="auto" className='mt-4'><Cardsearch image={item.strMealThumb} title={item.strMeal} cate={item.strCategory} id={item.idMeal} /></Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
};

export default Searchgrid;