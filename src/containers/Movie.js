import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Movie from '../components/Movie/Movie';
import { asyncGetMovie } from '../store/actions/Movie';
import { asyncAddWatchList, asyncGetWatchList, asyncRemoveWatchList } from '../store/actions/WatchList';

export const MovieContainer = (props) => {
  return (
    <Movie {...props} />
  )
}

export const mapStateToProps = ({ movie, watchlist, auth }) => {
  return {
    movie: movie.movie,
    watchlist: watchlist.watchlist,
    userId: auth.userId,
    token: auth.token,
    isGetMovieLoading: movie.isGetMovieLoading,
    isAddWatchListLoading: watchlist.isAddWatchListLoading,
    isRemoveWatchListLoading: watchlist.isRemoveWatchListLoading,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(asyncGetMovie(id)),
    addWatchList: (data, uid, movieId, token) => dispatch(asyncAddWatchList(data, uid, movieId, token)),
    getWatchList: (uid, token) => dispatch(asyncGetWatchList(uid, token)),
    removeWatchList: (uid, movieId, token) => dispatch(asyncRemoveWatchList(uid, movieId, token))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MovieContainer);