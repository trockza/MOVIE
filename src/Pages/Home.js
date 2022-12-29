import React, { useEffect, useState } from 'react'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import Axios from 'axios';
import SearchFilter from 'react-filter-search'
import ProductCard from '../components/ProductCard';

export const API_KEY = "474c41327cb43920eb16b17a867ecd36";

const Home = () => {
      const [theme] = useThemeHook();
      const [searchInput, setSearchInput] = useState('');
      const [productData, setProductData] = useState([]);
      const [selectedMovie, onMovieSelect] = useState();
      const [timeoutId, updateTimeoutId] = useState();


      const fetchData = async (searchString) => {
            const response = await Axios.get(
                  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchString}`,
            );
            setProductData(response.data.results);
      };

      useEffect(() => {
            console.log(productData);
      }, [productData])

      const onTextChange = (e) => {
            onMovieSelect(null)
            clearTimeout(timeoutId);
            setSearchInput(e.target.value);
            const timeout = setTimeout(() => fetchData(e.target.value), 500);
            updateTimeoutId(timeout);
      };

      return (
            <Container className='py-4'>
                  <Row className='justify-content-center'>
                        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                              <h1 className={theme ? 'text-light my-5' : 'text-black my-5'}>Search MOVIE</h1>
                              <InputGroup className="mb-3">
                                    <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
                                          <BiSearch size="2rem" />
                                    </InputGroup.Text>
                                    <FormControl
                                          placeholder="Search"
                                          value={searchInput}
                                          onChange={onTextChange}
                                          className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
                                    />
                              </InputGroup>

                        </Col>
                        <SearchFilter
                              value={searchInput}
                              data={productData}
                              renderResults={results => (
                                    <Row className='justify-content-center'>
                                          {results.map((item, i) => (
                                                <ProductCard data={item} key={i} />
                                          ))}
                                    </Row>
                              )}
                        />

                  </Row>
            </Container>
      )
}

export default Home