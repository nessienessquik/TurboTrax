import React, { Component } from 'react';
import { API } from "aws-amplify";


import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import NewHabit from './addNewHabit.js';
import EditButton from './editButton.js';


class Habits extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      habitsArray: [],
      notes: [],
      updatedArray: []
    };
  }

  async componentDidMount() {

    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false });

  }
  
  notes() {
    return API.get("turbotrax", "/turbotrax");
  }
  
  renderLander() {
    return (
      <div className="lander">
        <h3>you have no tracks. add one here.</h3>
        <NewHabit />
      </div>
    );
  }

  renderNotes() {
    let habitsArray = this.state.notes;

    let habitsObject = habitsArray.map((item, index) => {

      return <Button key={index} onClick={() => {
  
        if(this.state.updatedArray.includes(item.content) === true){

          let thisHabit = item.content;
        
          let filteredArray = this.state.updatedArray.filter(foo => foo !== thisHabit);
          this.setState({updatedArray: filteredArray, isToggleOn: "false"}, function(){

            console.log(this.state.isToggleOn);
            console.log(this.state.updatedArray);

          });

        } else if (this.state.updatedArray.includes(item.content) === false) {

          this.setState({ updatedArray: [...this.state.updatedArray, item.content], isToggleOn: "true" }, function() {

            console.log(this.state.isToggleOn);
            console.log(this.state.updatedArray);

          })
        }

      }}>{item.content}</Button> 

      });

    return (
      <div className="notes">
        <h3>What did you do today?</h3>
        {habitsObject}

      </div>
    );
  }


  render() {

    return (
      
      <Grid>
        {this.state.notes.length > 0 ? this.renderNotes() : this.renderLander()}
      </Grid>

    );
  }
}

export default Habits; 
