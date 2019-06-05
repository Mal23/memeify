import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class MemeForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    url: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { url } = this.state;
    this.props.onSubmit(url);
    this.setState({ url: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ url: target.value });
  }

  render() {
    const { url } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" name="text" value={url} onChange={ this.handleChange } />
        <button>Add Meme!</button>
      </form>
    );
  }
}
