import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class habitButton extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      
        <button>{this.props.habitName}</button>

    );
  }
}

export default habitButton; 
