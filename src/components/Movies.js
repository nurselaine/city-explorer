import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Movie from './Movie.js';

class Movies extends React.Component{
  render() {
    return (
      <Movie data={this.props.data}/>
    );
  }
}
export default Movies;