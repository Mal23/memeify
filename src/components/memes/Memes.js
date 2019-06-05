import React from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';

function Memes({ memes }) {
  const memesList = memes.map((meme, i) => {
    return (
      <li key={i}>
        <Meme url={meme.url} />
      </li>
    );
  });

  return (
    <ul>
      {memesList}
    </ul>
  );
}

Memes.propTypes = {
  memes: PropTypes.array.isRequired
};

export default Memes;
