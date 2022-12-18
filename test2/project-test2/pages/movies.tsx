import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'antd';
import styles from '../styles/movies.module.css'
import { Input, Space } from 'antd';

const { Search } = Input;


function MovieList() {
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
    <div className="site-card-wrapper" id={styles.homeMovies}>
      <h1 id={styles.judul}>Aria Films</h1>
      <br /><br />
      
      <div id={styles.search}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </div>
      <br />

    <Row gutter={10}>
    {movies.map(movie => (
        <Col>
        <Card
          hoverable
          style={{ width: 240}}
          cover={<img alt="example" src={movie.image}/>}
          >
            <h3>{movie.title}</h3>
            <p>{movie.rate}</p>
            <p>{movie.description}</p>
        </Card>
      <br />
      </Col>
             
        )
        )}
    </Row>
  </div>
  );
}

export default MovieList;
