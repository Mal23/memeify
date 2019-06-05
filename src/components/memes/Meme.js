import React from 'react';
import PropTypes from 'prop-types';

function Meme({ url }) {
  return (
    <img src={url} />
  );
}

Meme.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Meme;
