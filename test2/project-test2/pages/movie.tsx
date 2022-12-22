import styles from '../styles/movie.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Space } from 'antd';
import { Button, Popover } from 'antd';
const { Search } = Input;

import { Card, Row, Col } from 'antd';
import Navbar from './navbar';

function ListMovies() {
    const [movies, setMovies] = useState([]);
  
    const fetchData = async (keyword?: string) => {
      const result = await axios.get('/api/movie', { params: { keyword } });
      console.log(result)
      setMovies(result.data);
    };
  
    useEffect(() => {
      
  
      fetchData();
    }, []);
  
    const onSearch = (value: string) => fetchData(value);

    
  
    return (
      <div>


        <br />
        <div>
      <Search className={styles.search} placeholder="input search text" onSearch={onSearch} enterButton />
      </div>


        <Row className={styles.widget}>
            {movies.map(movie => (
                <Col>
                <Popover content={movie.description} title={movie.title}>
                <Card
                hoverable
                style={{ width: 200}}
                cover={<img alt="example" src={movie.image}/>}
                >
                    <h3>{movie.title}</h3>
                    <p>Rate : {movie.rate}</p>
                    <p> Desc : {movie.description}</p>
                </Card>
                </Popover>
                <br />
                </Col>
                    
                )
                )}
    </Row>
    </div>

    );
  }

export default ListMovies;
