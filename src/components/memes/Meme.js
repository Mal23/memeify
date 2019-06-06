import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Meme({ url, id }) {
  return (
    <Link to={`/${id}`}>
      <img src={url} />
    </Link>
  );
}

Meme.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Meme;
