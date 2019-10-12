import React from 'react';
import { connect } from 'react-redux';
import MovieImages from '../components/Movie/MovieImages/MovieImages';
import { asyncGetMovieImages } from '../store/actions/MovieImages';

const MovieImagesContainer = (props) => {
  return (
    <MovieImages {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    movieImages: state.movieImages.movieImages,
    isGetMovieImagesLoading: state.movieImages.isGetMovieImagesLoading,
    getMovieImagesError: state.movieImages.getMovieImagesError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieImages: (id) => dispatch(asyncGetMovieImages(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieImagesContainer)