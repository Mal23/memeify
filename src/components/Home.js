import React from 'react';
import CreateMeme from '../containers/memes/CreateMeme';
import AllMemes from '../containers/memes/AllMemes';
import styles from './styles.css';

export default function Home() {
  return (
    <section className={styles.Home}>
      <CreateMeme />
      <AllMemes />
    </section>
  );
}
