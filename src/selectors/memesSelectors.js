export const getMemes = state => (state.memes || []);
export const getMemeUrls = state => {
  return getMemes(state)
    .map((meme) => ({
      url: meme.url
    }));
};
