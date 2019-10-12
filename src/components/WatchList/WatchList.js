import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebaseApp } from '../../firebase/FirebaseConfig';
import './WatchList.scss';
import MovieCard from '../Movies/MovieList/MovieCard';

export default class WatchList extends Component {
  componentDidMount() {
    const { getWatchList, userId, token } = this.props;
    getWatchList(userId, token)
  }

  render() {
    const { watchlist, history } = this.props;

    firebaseApp.auth().onAuthStateChanged(user => {
       if (!user) history.push('/popular/1')
    })


    if (!watchlist.data) return <p className="watchlist-nodata">No Data</p>

    const watchListArray = Object.values(watchlist.data)

    return (
      <div className="watchlist">
        <h2 className="watchlist-title">Watch List</h2>
        { !watchListArray && <div> no data </div> }
        { watchListArray &&
          watchListArray.map(result => {
            return (
              <MovieCard result={result} key={result.id}/>
            )
          })
        }
      </div>
    )
  }
}

WatchList.propTypes = {
  watchlist: PropTypes.object,
  userId: PropTypes.string,
  token: PropTypes.string,
  history: PropTypes.object,
  getWatchList: PropTypes.func
}