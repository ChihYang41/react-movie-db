import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd'

function MovieFilter({ match }) {

  const filters = [
    { name: "popular", text: "Popular" },
    { name: "top_rated", text: "Top Reated" },
    { name: "now_playing", text: "Now Playing" },
    { name: "upcoming", text: "Upcoming" }
  ]
  return (
    <div style={{ margin: '16px' }}>
      {
        filters.map(item => (
          <Button
            key={item.name}
            title={item.name}
            className={match.params.filter === item.name ? "movies-filter active" : "movies-filter"}
          >
            <Link to={`/${item.name}/1`}>
              {item.text}
            </Link>
          </Button>
        ))
      }
    </div>
  );
}

MovieFilter.propTypes = {
  match: PropTypes.object
}

export default MovieFilter;