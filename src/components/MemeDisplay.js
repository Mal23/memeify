import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeDisplay.css';

export default function MemeDisplay({ topText, image, bottomText }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.memeDiv}>
          <div className={styles.top}>
            <span>{topText}</span>
          </div>
          <img src={image}/>
          <div className={styles.bottom}>
            <span>{bottomText}</span>
          </div>
        </div>
      </div>
    </>
  );
}

MemeDisplay.propTypes = {
  topText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};
