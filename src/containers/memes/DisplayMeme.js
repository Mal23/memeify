import { connect } from 'react-redux';
import MemeDetail from '../../components/memes/MemeDetail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, props) => ({
  meme: {
    id: props.match.params.memeId,
    url: state.memes[props.match.params.memeId].url
  }
});

export default withRouter(connect(
  mapStateToProps
)(MemeDetail));
