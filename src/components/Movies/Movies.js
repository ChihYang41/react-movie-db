import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import MovieFilter from './MovieFilter/MovieFilter';
import MovieList from './MovieList/MovieList';
import Loading from '../loading/Loading';
import './Movies.scss';

export default class Movies extends Component {
  componentDidMount() {
    const { match, getMovies } = this.props
    getMovies(match.params.filter, match.params.page)
  }

  componentDidUpdate(prevProps) {
    const { match, getMovies } = this.props
    if (prevProps.match.params.filter !== match.params.filter ||
      prevProps.match.params.page !== match.params.page
    ) {
      this.setState({ current: Number(match.params.page) })
      getMovies(match.params.filter, match.params.page)
    }
  }

  handlePageChange = (page) => {
    const { match, history } = this.props;
    history.push(`/${match.params.filter}/${page}`)
    window.scrollTo(0, 0);
  }

  render() {
    const { isGetMoviesLoading, match } = this.props
    const { data } = this.props.movies
    if (!data) return <Loading/>

    return (
      <div>
        <MovieFilter match={match}/>
        <MovieList movies={data.results} isGetMoviesLoading={isGetMoviesLoading}/>
        <Pagination current={Number(match.params.page)} onChange={this.handlePageChange} defaultPageSize={20} total={data.total_results}/>
      </div>
    )
  }
}

Movies.propTypes = {
  match: PropTypes.object,
  getMovies: PropTypes.func,
  isGetMoviesLoading: PropTypes.bool,
}