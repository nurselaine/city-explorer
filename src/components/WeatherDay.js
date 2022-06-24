import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component{
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div>
      {
        data.map((obj, idx) => {
          return (
            <ListGroup.Item key={idx} >
              {`Today is ${obj.time} Anticipate ${obj.forecast}`}
            </ListGroup.Item>
          )
        })
      }
      </div>

    )
  }
}
export default WeatherDay;