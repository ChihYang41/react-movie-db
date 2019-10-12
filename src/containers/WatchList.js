import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import WatchList from '../components/WatchList/WatchList';
import { asyncGetWatchList, asyncRemoveWatchList } from '../store/actions/WatchList'

export const WatchListContainer = (props) => {
  return (
    <WatchList {...props} />
  )
}

export const mapStateToProps = ({ watchlist, auth }) => {
  return {
    watchlist: watchlist.watchlist,
    userId: auth.userId,
    token: auth.token,
    isGetWatchListLoading: watchlist.isGetWatchListLoading,
    isRemoveWatchListLoading: watchlist.isRemoveWatchListLoading,
    getWatchListError: watchlist.getWatchListError,
    removeWatchListError: watchlist.removeWatchListError
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getWatchList: (uid, token) => dispatch(asyncGetWatchList(uid, token)),
    removeWatchList: (uid, movieId, token) => dispatch(asyncRemoveWatchList(uid, token))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(WatchListContainer)