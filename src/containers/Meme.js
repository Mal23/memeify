import React, { PureComponent } from 'react';
import MemeDisplay from '../components/MemeDisplay';
import TextSelector from '../components/TextSelector';
import ImageSelector from '../components/ImageSelector';
import { postMeme } from '../services/memeApi';

export default class Meme extends PureComponent {
  state={
    topText: '',
    bottomText: '',
    image: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  }

  saveMemeToDb = event => {
    event.preventDefault();
    postMeme(this.state);
  }

  render() {
    const { topText, bottomText, image } = this.state;

    return (
      <>
      <ImageSelector image={image} handleChange={this.handleChange}/>
      <TextSelector topText={topText} bottomText={bottomText} handleChange={this.handleChange}/>
      <MemeDisplay topText={topText} bottomText={bottomText} image={image} handleChange={this.handleChange}/>
      <button onClick={this.saveMemeToDb}>Save Meme!</button>
      </>
    );
  }
}
