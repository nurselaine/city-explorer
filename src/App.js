import axios from 'axios';
import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      city: '',
      cityObj: {},
    }
  }
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      userInput: value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      city: this.state.userInput,
    })
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.userInput}&format=json`;
    let cityInfo = await axios.get(url);
    this.setState({
      cityObj: cityInfo.data[0],
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter City Name:</label>
          <input value={this.state.userInput} onChange={this.handleChange}/>
          <button type='submit'>Explore!</button>
        </form>
        <ListGroup variant="flush">
          <ListGroup.Item>{this.state.cityObj.display_name}</ListGroup.Item>
          <ListGroup.Item>Latitude: {this.state.cityObj.lat}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.state.cityObj.lon}</ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

export default App;