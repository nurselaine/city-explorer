import axios from 'axios';
import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
import ErrorAlert from './components/ErrorAlert';
import Weather from './components/Weather';

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
      error: false,
      errorMessage: '',
      weatherData: [],
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
    let cityInfo;
    try {
      cityInfo = await axios.get(url);
      this.setState({
        cityObj: cityInfo.data[0],
        lat: this.state.cityObj.lat,
        lon: this.state.cityObj.lon,
        error: false,
      })
      
    } catch (error) {
      let errorMessage = `An error occured: ${error.message}`;
      this.setState({
        error: true,
        errorMessage: errorMessage,
      })
    }

    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.userInput}&lat=${cityInfo.data[0].lat}&lon=${cityInfo.data[0].lon}`;
      let data = await axios.get(url);
      data = data.data;
      this.setState({
        weatherData: data,
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      })
    }
  }

  handleclose = () => {
    if(this.state.error){
      this.setState({
        error: false,
      })
    }
  }

  setShow = () => {
      this.setState({
        error: true,
      })
  }

  render() {
    return (
      <div className="app-container">
        {this.state.error ? <ErrorAlert errorMessage={this.state.errorMessage} onClose={this.handleclose} />
        : ''}
        <form onSubmit={this.handleSubmit}>
          <label>City Explorer</label>
          <input placeholder="Enter A City 🔎" value={this.state.userInput} onChange={this.handleChange}/>
          <button className='search' type='submit'>Explore!</button>
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
        <Weather data={this.state.weatherData || []} />
      </div>
    )
  }
}

export default App;