import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component{
  render() {
    let data = this.props.data;
    return (
      <div>
      {
        data.map((obj, idx) => {
          return (
            <ListGroup.Item key={idx} >
              {`Today is ${obj.date} Anticipate ${obj.description}`}
            </ListGroup.Item>
          )
        })
      }
      </div>

    )
  }
}
export default WeatherDay;