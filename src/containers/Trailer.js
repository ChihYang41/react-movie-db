import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Trailer from '../components/Movie/Trailer/Trailer';
import { asyncGetTrailers } from '../store/actions/Trailer'

export const TrailerContainer = (props) => {
  return (
    <Trailer {...props} />
  )
}

export const mapStateToProps = (state) => {
  return {
    trailers: state.trailers.trailers,
    isGetTrailersLoading: state.trailers.isGetTrailersLoading,
    getTrailersError: state.trailers.getTrailersError
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getTrailers: (id) => dispatch(asyncGetTrailers(id))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)
  (TrailerContainer)
);