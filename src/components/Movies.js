import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Movies extends React.Component{
  render() {
    console.log(this.props.data);
    console.log(this.props.data[0]);
    let movie = this.props.data.map((obj, idx) => {
      return (
        <Carousel.Item>
          <img 
            className='d-block w-100'
            src='../logo512.png'
            alt={obj.title}
            key={idx}
          />
          <Carousel.Caption>
            <h3>{obj.title}</h3>
            <p>{obj.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return (
      <Carousel>
        {movie}
      </Carousel>
    );
  }
}
export default Movies;