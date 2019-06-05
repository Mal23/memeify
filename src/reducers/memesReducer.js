import { CREATE_MEME } from '../actions/memes/MemesActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_MEME:
      return [...state, action.payload];
    default:
      return state;
  }
}
