import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'antd';
import styles from '../styles/Home.module.css'


function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/movie');
      console.log(result)
      setMovies(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="site-card-wrapper" id={styles.homeMovies}>
    <Row gutter={10}>
    {movies.map(movie => (
        <Col span={5}>
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
