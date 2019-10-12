import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip, Spin } from 'antd';

export default class WatchListButton extends Component {
  componentDidMount() {
    const { userId, token, getWatchList, watchlist } = this.props;
    if (userId && !watchlist.data) {
      getWatchList(userId, token)
    }
  }

  handleAddWatchList = (isInWatchList) => {
    const { movieData, addWatchList, userId, token, removeWatchList } = this.props
    if (!isInWatchList) {
      const watchListData = {
        id: movieData.id,
        title: movieData.title,
        poster_path: movieData.poster_path,
      }
      addWatchList(watchListData, userId, movieData.id, token)
    } else {
      removeWatchList(userId, movieData.id, token)
    }
  }

  render() {
    const { userId, movieData, watchlist } = this.props;

    if (userId && watchlist.data === undefined) return <Spin/>

    const watchlistArray = Object.values(watchlist.data);
    const isInWatchList = watchlistArray.find(item => item.id === movieData.id)

    return (
      <Fragment>
      {
        userId ?
        <Button className="watchlist-button" type={isInWatchList ? 'dashed' : 'primary'} icon="inbox" onClick={() => this.handleAddWatchList(isInWatchList)}>
          {isInWatchList ? 'Remove from watch list' : 'Add to WatchList'}
        </Button>
        :
        <Tooltip title="Please Login">
          <Button className="watchlist-button" type="primary" icon="inbox" disabled>
            Add to WatchList
          </Button>
        </Tooltip>
      }
      </Fragment>
    )
  }
}

WatchListButton.propTypes = {
  movieData: PropTypes.object,
  userId: PropTypes.string,
  token: PropTypes.string,
  watchlist: PropTypes.object,
  addWatchList: PropTypes.func,
  removeWatchList: PropTypes.func,
}
