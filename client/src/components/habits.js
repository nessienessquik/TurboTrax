import React, { Component } from 'react';
import { API } from "aws-amplify";


import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import NewHabit from './addNewHabit.js';
import EditButton from './editButton.js';

// const useStyles = makeStyles(theme => ({
//   root: {
 
//   },
// }));

class Habits extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      habitsArray: [],
      notes: []
    };
  }

  async componentDidMount() {
    // if (!this.props.isAuthenticated) {
    //   return;
    // }
  
    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false });

    // console.log(this.state.notes[0].content);
  }
  
  notes() {
    return API.get("turbo", "/turbo");
  }
  
  // renderNotesList(notes) {

  //     habitsObject = notes.map((item, index) => {
  //       return <Button key={index} onClick={() => {
    
  //         this.setState(state => ({
  //           isToggleOn: !state.isToggleOn
  //         }));
  //       }}>{item}</Button> 
  //       });
  // }
  

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
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }}>{item.content}</Button> 
      });

    return (
      <div className="notes">
        <h3>What did you do today?</h3>
        {habitsObject}
        {/* <li>
          {this.renderNotesList(this.state.notes)}
        </li> */}
      </div>
    );
  }


  render() {
    
    // let habitsArray = this.state.habitsArray;
    // let habitsObject;
    
    // if (habitsArray.length <= 0){
    //   habitsObject = <NewHabit />
    // } else {
    //   habitsObject = habitsArray.map((item, index) => {
    //     return <Button key={index} onClick={() => {
    
    //       this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //       }));
    //     }}>{item}</Button> 
    //     });
    // }

    return (
      
      <Grid>
        {this.renderNotes()}
        {/* {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()} */}
      </Grid>

    );
  }
}

export default Habits; 
