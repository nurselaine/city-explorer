import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay';

class Weather extends React.Component{
  render() {
    return (
      <ListGroup>
        <WeatherDay data={this.props.data} />
      </ListGroup>
    )
  }
}

export default Weather;