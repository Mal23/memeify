import React from 'react';
import DisplayMeme from '../containers/memes/DisplayMeme';
import { Link } from 'react-router-dom';

export default function MemePage() {
  return (
    <section>
      <Link to="/"><p>Home</p></Link>
      <DisplayMeme />
    </section>
  );
}
