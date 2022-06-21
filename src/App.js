import axios from 'axios';
import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      city: '',
      cityObj: {},
      lat: 0,
      lon: 0,
      cityImg: '',
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
      lat: this.state.cityObj.lat,
      lon: this.state.cityObj.lon,
      
    })
  }

  render() {
    return (
      <div className="app-container">
        <form onSubmit={this.handleSubmit}>
          <label>City Explorer</label>
          <input placeholder="Enter A City 🔎" value={this.state.userInput} onChange={this.handleChange}/>
          <button type='submit'>Explore!</button>
        </form>
        <Figure>
      <Figure.Image
        width={371}
        height={380}
        alt={this.state.cityObj.display_name}
        src={this.state.cityObj.display_name ? `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityObj.lat},${this.state.cityObj.lon}&zoom=12` 
            : '../logo192.png'}
      />
        <Figure.Caption>
          <ListGroup variant="flush">
            <ListGroup.Item>{this.state.cityObj.display_name}</ListGroup.Item>
            <ListGroup.Item>Latitude: {this.state.cityObj.lat}</ListGroup.Item>
            <ListGroup.Item>Longitude: {this.state.cityObj.lon}</ListGroup.Item>
          </ListGroup>
        </Figure.Caption>
      </Figure>
      </div>
    )
  }
}

export default App;