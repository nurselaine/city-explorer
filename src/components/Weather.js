import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component{
  render() {
    console.log(this.props.data);
    let data = this.props.data.map((obj, idx) => {;
      return (
        <ListGroup.Item key={idx}>{`Today is ${obj.date} Anticipate ${obj.description}`}</ListGroup.Item>
      )
    });

    console.log(data);
    return(
    <ListGroup horizontal>
      {data}
    </ListGroup>
    
    )
  }
}

export default Weather;