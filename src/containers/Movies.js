import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movies from '../components/Movies/Movies';
import { asyncGetMovies } from '../store/actions/movieList';


export const MoviesContainer = (props) => {
  return (
    <Movies {...props} />
  )
}

export const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isGetMoviesLoading: state.movies.isGetMoviesLoading,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (filter, page) => dispatch(asyncGetMovies(filter, page))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesContainer));