import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'antd';
const { Meta } = Card;

export default function CastCard({actor}) {
  const path = 'https://image.tmdb.org/t/p/w300'+actor.profile_path

  return (
    <Col span={4} xs={24} sm={12} lg={8} xl={4} style={{marginBottom: '20px'}} className="cast-card">
      <Card
        style={{margin: '0px 15px'}}
        cover={<img alt="cast" src={path} style={{ height: 'auto', width: '100%'}}/>}
      >
      <Meta title={actor.name} description={actor.character} />
      </Card>
    </Col>
  )
}

CastCard.propTypes = {
  actor: PropTypes.object,
}
