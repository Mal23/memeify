export const CREATE_MEME = 'CREATE_MEME';
export const createMeme = url => ({
  type: CREATE_MEME,
  payload: { url }
});
