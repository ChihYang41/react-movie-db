import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Recommendations from '../components/Movie/Recommendations/Recommendations';
import { asyncGetRecommendations } from '../store/actions/Recommendations';

const RecommendationsContainer = (props) => {
  return (
    <Recommendations {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    recommendations: state.recommendations.recommendations,
    isGetRecommendationsLoading: state.recommendations.isGetRecommendationsLoading,
    getRecommendationsError: state.recommendations.getRecommendationsError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendations: (id) => dispatch(asyncGetRecommendations(id))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecommendationsContainer))