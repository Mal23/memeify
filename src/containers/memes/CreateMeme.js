import { connect } from 'react-redux';
import MemeForm from '../../components/memes/MemeForm';
import { createMeme } from '../../actions/memes/MemesActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(url) {
    dispatch(createMeme(url));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MemeForm);
