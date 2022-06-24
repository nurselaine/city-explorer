import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component{
  render() {
    console.log(this.props.data);
    let data = this.props.data;
    return (
      <Carousel>
        {
          data.map((obj,idx) => {
            return (
              <Carousel.Item key={idx}>
                <img 
                className='d-block w-100'
                src={obj.imageUrl ? `https://image.tmdb.org/t/p/w500/${obj.imageUrl}` : '../../public/movie.jpg'}
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
        }
      </Carousel>
    )
  }
}
export default Movie;