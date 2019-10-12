import React from 'react';
import { connect } from 'react-redux';
import { asyncGetCast } from '../store/actions/Cast'
import Cast from '../components/Movie/Cast/Cast';

const CastContainer = (props) => {
  return (
    <Cast {...props}/>
  )
}

const mapStateToProps = ({ cast }) => {
  return {
    cast: cast.cast,
    isGetCastLoading: cast.isGetCastLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCast: (id) => dispatch(asyncGetCast(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CastContainer)