import React, { Component } from 'react';
import { Spin } from 'antd';
import MovieList from '../Movies/MovieList/MovieList';

export default class SearchResults extends Component {
  componentDidMount() {
    const { searchMovies, match } = this.props;
    searchMovies(match.params.query)
  }

  componentDidUpdate(prevProps) {
    const { searchMovies, match } = this.props;
    if (prevProps.match.params.query !== match.params.query) {
      searchMovies(match.params.query)
    }
  }

  render() {
    const { searchResults, isSearchMoviesLoading, match } = this.props;
    const searchData = searchResults.data;

    if (!searchData) return <Spin />

    return (
      <div>
        <h2 style={{color: '#fff'}}>Search Results :「{match.params.query}」</h2>
        <MovieList searchData={searchData.results}isSearchMoviesLoading={isSearchMoviesLoading} />
      </div>
    )
  }
}