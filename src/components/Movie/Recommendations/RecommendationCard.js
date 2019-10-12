import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'antd';
const { Meta } = Card;

export default function RecommendationCard({ result, history }) {
  const path = 'https://image.tmdb.org/t/p/w500' + result.poster_path;

  const handleViewRecommendation = (id) => {
    history.push(`/movie/${id}`)
  }

  return (
    <Col
      span={6}
      xs={24}
      sm={12}
      lg={8}
      xl={6}
      xxl={4}
      style={{marginBottom: '20px'}}
      className="recommendations-card"
      onClick={() => handleViewRecommendation(result.id)}
    >
      <Card
        hoverable
        style={{margin: '0px 15px'}}
        cover={<img alt="profile" src={path} style={{height: 'auto', width: '100%'}}/>}
      >
      <Meta title={result.title} description={''} />
      </Card>
    </Col>
  )
}

RecommendationCard.propTypes = {
  result: PropTypes.object,
  history: PropTypes.object
}