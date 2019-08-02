import React from 'react';
import { API } from "aws-amplify";

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import NewHabit from './addNewHabit.js';
import EditButton from './editButton.js';
import HabitButton from './habitButton.js';


class Habits extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // array of data objects from API
      apiObject: []
    };
  }

  async componentDidMount() {

    try {
      //creates an apiObject from the data returned from turbotrax-categories
      const apiObject = await this.list();
      this.setState({ apiObject: apiObject });    

      console.log(apiObject);

    } catch (e) {

      alert(e);

    }

  }
  
  list() {
    //api request to get data from turbotrax-categories
    return API.get("turbotrax", "/turbotrax/category");

  }
  
  renderEmptyTrax() {
    return (
      <div className="lander">
        <h3>you have no tracks. add one here.</h3>
        <NewHabit />
      </div>
    );
  }

  renderTrax() {
    let habitsArray = this.state.apiObject;

    console.log(habitsArray);

    let habitsObject = habitsArray.map((item, index) => {

      return <HabitButton 
              key={index} 
              habitName={item.content} 
              categoryId={item.trackId}
              habitUserId={item.userId}
              />

    });

    return (
      <div className="">
        <h3>What did you do today?</h3>
        {habitsObject}
        <NewHabit />
      </div>
    );
  }

  render() {
    return (
      <Grid>
      {this.state.apiObject.length > 0 ? this.renderTrax() : this.renderEmptyTrax()}
      </Grid>
    );
  }
}

export default Habits; 
