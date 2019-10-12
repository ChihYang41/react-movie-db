import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default function MovieDetails({ movieData }) {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="movie-details">
      <div className="movie-item">
        <Icon
          type="calendar"
          theme="twoTone"
          className="calendar"
          twoToneColor="#fa8c16"
        />
        Release date : {movieData.release_date}
      </div>
      <div className="movie-item">
        <Icon
          type="dollar"
          theme="twoTone"
          className="dollar"
          twoToneColor="#fa8c16"
        />
        revenue : {movieData.revenue !== 0 ? '$' + numberWithCommas(movieData.revenue) : 'no data'}
      </div>
      <div className="movie-item">
        <Icon
          type="smile"
          theme="twoTone"
          className="smile"
          twoToneColor="#fa8c16"
        />
        popularity : {movieData.popularity}
      </div>
      <div className="movie-item">
        <Icon
          type="home"
          theme="twoTone"
          className="robot"
          twoToneColor="#fa8c16"
        />
        <a href={movieData.homepage} className="movie-homepage" target="_blank" rel="noopener noreferrer">homepage</a>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  movieData: PropTypes.object
}