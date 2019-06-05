import reducer from './memesReducer';
import { createMeme } from '../actions/memes/MemesActions';

describe('meme reducer', () => {
  it('returns an empty array on initialization', () => {
    const newState = reducer(undefined, {
      type: '@@INIT'
    });

    expect(newState).toEqual([]);
  });

  it('handles the create meme action', () => {
    const newState = reducer([], createMeme('hola'));

    expect(newState).toEqual([
      { url: 'hola' }
    ]);
  });
});

