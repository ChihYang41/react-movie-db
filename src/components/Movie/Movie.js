import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import './Movie.scss';

import MovieDetails from './MovieDetails/MovieDetails';
import WatchListButton from '../WatchList/WatchListButton';
import Cast from '../../containers/Cast';
import MovieImages from '../../containers/MovieImages';
import Recommendations from '../../containers/Recommendations';
import Trailer from '../../containers/Trailer';
import Loading from '../loading/Loading';

export default class Movie extends Component {
  componentDidMount() {
    const { match, getMovie } = this.props;
    getMovie(match.params.movie_id);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.movie_id !== this.props.match.params.movie_id) {
      const { match, getMovie } = this.props;
      getMovie(match.params.movie_id);
      window.scrollTo(0, 0);
    }

    if (prevProps.isAddWatchListLoading !== this.props.isAddWatchListLoading && !this.props.isAddWatchListLoading) {
      const { getWatchList, userId, token } = this.props;
      getWatchList(userId, token);
    }

    if (prevProps.isRemoveWatchListLoading !== this.props.isRemoveWatchListLoading && !this.props.isRemoveWatchListLoading) {
      const { getWatchList, userId, token } = this.props;
      getWatchList(userId, token);
    }
  }

  render() {
    const {
      movie,
      match,
      userId,
      token,
      watchlist,
      isGetMovieLoading,
      addWatchList,
      getWatchList,
      removeWatchList
    } = this.props;

    const movieData = movie.data

    if (!movieData || isGetMovieLoading) return <Loading/>

    return (
      <div className="movie-container">
        <div
          className="movie-backdrop backdrop-fadeIn backdrop-animated"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)),
            url(https://image.tmdb.org/t/p/w1280${movieData.backdrop_path})`
          }}
        />
        <div className="movie">
          <img
            alt="movie image"
            src={'https://image.tmdb.org/t/p/w500'+movieData.poster_path}
            className="movie-image"
          />
          <div className="movie-info">
            <h3 className="movie-title">{movieData.title}</h3>
            <p className="movie-tagline">{movieData.tagline}</p>
            <WatchListButton
              userId={userId}
              token={token}
              addWatchList={addWatchList}
              movieData={movieData}
              getWatchList={getWatchList}
              removeWatchList={removeWatchList}
              watchlist={watchlist}
            />
            <p className="movie-overview">{movieData.overview}</p>
            <p className="movie-genres">
              {
                movieData.genres.map(item => (
                   <Tag color="orange" key={item.id}>{item.name}</Tag>
                ))
              }
            </p>
            <MovieDetails movieData={movieData} />
          </div>
        </div>
        <Trailer movieId={match.params.movie_id} />
        <Cast movieId={match.params.movie_id}/>
        <MovieImages movieId={match.params.movie_id}/>
        <Recommendations movieId={match.params.movie_id}/>
      </div>
    );
  }
}

Movie.propTypes = {
  match: PropTypes.object,
  movie: PropTypes.object,
  userId: PropTypes.string,
  token: PropTypes.string,
  getMovie: PropTypes.func,
  isGetMovieLoading: PropTypes.bool,
  addWatchList: PropTypes.func,
  getWatchList: PropTypes.func,
  removeWatchList: PropTypes.func
}
