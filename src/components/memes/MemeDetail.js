import React from 'react';
import PropTypes from 'prop-types';

function MemeDetail({ meme }) {
  return (
    <section>
      <img src={meme.url} />
    </section>
  );
}

MemeDetail.propTypes = {
  meme: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default MemeDetail;
