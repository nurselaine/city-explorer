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
                src='./logo512.png'
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