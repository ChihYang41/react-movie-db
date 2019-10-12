import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recommendations.scss';
import { Spin, Row } from 'antd';
import RecommendationCard from './RecommendationCard';

export default class Recommendations extends Component {
  componentDidMount() {
    const { getRecommendations, movieId } = this.props;
    getRecommendations(movieId)
  }

  render() {
    const { recommendations, history } = this.props;
    if (!recommendations.data) return <Spin/>

    return (
      <div className="recommendations-container">
        <h3 className="recommendations-title">Recommendations</h3>
        <Row className="recommendation" type="flex">
          {
            recommendations.data.results.map(result => {
              return (
                <RecommendationCard result={result} key={result.id} history={history}/>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

Recommendations.propTypes = {
  movieId: PropTypes.string,
  recommendations: PropTypes.object,
  history: PropTypes.object,
  getRecommendations: PropTypes.func
}