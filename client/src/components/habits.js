import React from 'react';
import { API } from "aws-amplify";

import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
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
      //creates an apiObject from the data returned from turbotrax-db
      const apiObject = await this.list();
      this.setState({ apiObject: apiObject });    
    } catch (e) {
      alert(e);
    }

  }
  
  list() {
    //api request to get data from turbotrax-db
    return API.get("turbotrax", "/turbotrax");
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

    let habitsObject = habitsArray.map((item, index) => {

      return <HabitButton key={index} habitName={item.content} />

    });

    // let habitsObject = habitsArray.map((item, index) => {

    //   let toggleClass = this.state.isToggleOn.toString();

    //   return <Button key={index} className={toggleClass} onClick={() => {

    //             if(this.state.updatedArray.includes(item.content) === true){

    //       let thisHabit = item.content;
        
    //       let filteredUpdateArray = this.state.updatedArray.filter(foo => foo !== thisHabit);
    //       let updatedToggleArray = this.state.toggleArray.map((value, index) => {
    //         console.log(index);
    //         console.log(value);
    //       });

          
    //       this.setState({updatedArray: filteredUpdateArray, updatedToggle: updatedToggleArray, isToggleOn: "false",}, function(){

    //         console.log(this.state.isToggleOn);
    //         console.log(this.state.updatedArray);
    //         console.log(this.state.updatedToggle)

    //       });

    //     } else if (this.state.updatedArray.includes(item.content) === false) {

    //       Object.keys(item).map(function(active, index) {
    //         item.active = "true";
    //       });

    //       this.setState({ updatedArray: [...this.state.updatedArray, item.content], isToggleOn: "true", updatedToggle: [...this.state.updatedToggle, item.active] }, function() {

    //         // console.log(this.state.isToggleOn);
    //         // console.log(this.state.updatedArray);
    //         // console.log(this.state.updatedToggle);
    //         console.log(item);

    //       })
    //     }
  
      // }}>{item.content}</Button> 

      // });

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
      {this.state.apiObject.length > 0 ? this.renderTrax() : this.renderEmptyTrax()}
    </Grid>

    );
  }
}

export default Habits; 
