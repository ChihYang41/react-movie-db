import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import ImageGallery from 'react-image-gallery';
import './MovieImages.scss';

export default class MovieImages extends Component {
  componentDidMount() {
    const { getMovieImages, movieId } = this.props;
    getMovieImages(movieId)
  }

  render() {
    const { data } = this.props.movieImages
    if (!data) return <Spin/>

    const images = data.backdrops.map(image => {
      return {
        original: 'https://image.tmdb.org/t/p/original' + image.file_path,
        thumbnail: 'https://image.tmdb.org/t/p/w300' + image.file_path
      }
    })

    return (
      <div className="images-gallery">
        <h3 className="images-title">Images Gallery</h3>
        { images.length > 0 && <ImageGallery items={images}/> }
      </div>
    );
  }
}

MovieImages.propTypes = {
  movieId: PropTypes.string,
  movieImages: PropTypes.object,
  getMovieImages: PropTypes.func
}