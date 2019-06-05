import { connect } from 'react-redux';
import Memes from '../../components/memes/Memes';
import { getMemeUrls } from '../../selectors/memesSelectors';

const mapStateToProps = state => ({
  memes: getMemeUrls(state)
});

export default connect(
  mapStateToProps
)(Memes);
