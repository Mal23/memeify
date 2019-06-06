import React from 'react';
import DisplayMeme from '../containers/memes/DisplayMeme';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default function MemePage() {
  return (
    <section className={styles.MemePage}>
      <Link to="/"><p>Home</p></Link>
      <DisplayMeme />
    </section>
  );
}
