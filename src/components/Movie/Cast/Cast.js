import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spin, Row } from 'antd';
import './Cast.scss';
import CastCard from './CastCard';

export default class Cast extends Component {
  componentDidMount() {
    const { getCast, movieId } = this.props;
    getCast(movieId)
  }

  render() {
    const { cast, isGetCastLoading } = this.props;
    const castData = cast.data

    if (!castData || isGetCastLoading) return <Spin/>

    return (
      <div className="cast-container">
        <h3 className="cast-title">Cast</h3>
        <Row className="cast-cards" type="flex">
          {
            castData.cast.slice(0,6).map(actor => (
              <CastCard actor={actor} key={actor.id}/>
            ))
          }
        </Row>
      </div>
    )
  }
}

Cast.propTypes = {
  cast: PropTypes.object,
  movieId: PropTypes.string,
  getCast: PropTypes.func,
  isGetCastLoading: PropTypes.bool
}