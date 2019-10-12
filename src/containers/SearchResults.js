import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from '../components/Search/SearchResults';
import { asyncSearchMovies } from '../store/actions/SearchResults'

const SearchResultsContainer = (props) => {
  return (
    <SearchResults {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults.searchResults,
    isSearchMoviesLoading: state.searchResults.isGetMovieLoading,
    searchMoviesError: state.searchResults.searchMoviesError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (movieQuery, moviePage) => dispatch(asyncSearchMovies(movieQuery, moviePage))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)
  (SearchResultsContainer)
);