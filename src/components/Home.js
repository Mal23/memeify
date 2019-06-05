import React from 'react';
import CreateMeme from '../containers/memes/CreateMeme';
import AllMemes from '../containers/memes/AllMemes';

export default function Home() {
  return (
    <section>
      <CreateMeme />
      <AllMemes />
    </section>
  );
}
