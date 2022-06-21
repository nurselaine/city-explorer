import React from 'react';
import Alert from 'react-bootstrap/Alert';

class ErrorAlert extends React.Component{

  render(){
    return(
      <Alert variant="danger" onClose={this.props.onClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {this.props.errorMessage}
        </p>
      </Alert>
    )
  }
}
export default ErrorAlert;