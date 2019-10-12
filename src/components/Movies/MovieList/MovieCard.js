import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'antd';
import { withRouter } from 'react-router-dom';
const { Meta } = Card;

function MovieCard({ result, history }) {
  const path = 'https://image.tmdb.org/t/p/w300' + result.poster_path

  const handleViewDetails = (id) => {
    history.push(`/movie/${id}`)
  }

  return (
    <Col
      span={6}
      xs={24}
      sm={12}
      lg={8}
      xl={6}
      style={{marginBottom: '20px'}}
      onClick={() => {handleViewDetails(result.id)}}
      className="movies-card"
    >
      <Card
        hoverable
        style={{margin: '0px 15px'}}
        cover={<img alt="example" src={path} className="fadeIn animated"/>}
      >
      <Meta title={result.title} description="" />
      </Card>
    </Col>
  );
}

MovieCard.propTypes = {
  result: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(MovieCard);