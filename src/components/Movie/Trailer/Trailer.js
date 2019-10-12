import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Spin } from 'antd';
import './Trailer.scss';

export default class Trailer extends Component {
  componentDidMount() {
    const { getTrailers, movieId } = this.props;
    getTrailers(movieId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieId !== this.props.movieId) {
      const { getTrailers, movieId } = this.props;
      getTrailers(movieId);
    }
  }

  render() {
    let trailerKey = null;
    const { trailers } = this.props;
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    if (!trailers.data) return <Spin/>

    if (trailers.data.results[0]) {
      trailerKey = trailers.data.results[0].key
    }

    return (
      <div className="trailer">
      {
        trailerKey &&
        <div className="videos">
          <h2 className="videos-title">Trailer</h2>
          <div className="videos-container">
            <YouTube
              videoId={trailerKey}
              opts={opts}
              onReady={this._onReady}
              className="hello"
            />
          </div>
        </div>
      }
      </div>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

Trailer.propTypes = {
  movieId: PropTypes.string,
  trailers: PropTypes.object,
  getTrailers: PropTypes.func
}
