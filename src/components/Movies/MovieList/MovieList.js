import React from 'react';
import PropTypes from 'prop-types';
import { Row, Spin } from 'antd';

import MovieCard from './MovieCard';

export default function MovieList({ movies, searchData, isGetMoviesLoading, isSearchMoviesLoading }) {
  if (isGetMoviesLoading || isSearchMoviesLoading) return <Spin style={{ minHeight:'83vh'}}/>

  return (
    <Row type="flex" justify="space-around" style={{margin: '20px 0px'}}>
      { movies && movies.map((result) => {
          return (
            <MovieCard result={result} key={result.id}/>
          )
        })
      }
      {
        searchData && searchData.map((result) => {
          return (
            <MovieCard result={result} key={result.id}/>
          )
        })
      }
    </Row>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array,
  searchData: PropTypes.array,
  isGetMoviesLoading: PropTypes.bool,
  isSearchMoviesLoading: PropTypes.bool
}