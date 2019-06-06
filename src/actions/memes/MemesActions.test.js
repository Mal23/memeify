import { createMeme, CREATE_MEME } from './MemesActions';

describe('Meme Actions', () => {
  it('creates a meme action', () => {
    expect(createMeme('hello')).toEqual({
      type: CREATE_MEME,
      payload: { url: 'hello' }
    });
  });
});
