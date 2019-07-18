import React from 'react';
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
      // habitsArray: ["Ran 10 Miles", "Got 8+ Hours of Sleep", "Cooked Dinner", "Meditated", "Practiced Guitar", "Drank Water"],
      habitsArray: [],
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
  
    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });

    const testing = this.notes();
    console.log(testing);
    console.log("testing");

  }
  
  notes() {
    return API.get("turbo", "/turbo");
  }
  


  render() {
    
    let habitsArray = this.state.habitsArray;
    let habitsObject;
    
    if (habitsArray.length <= 0){
      habitsObject = <NewHabit />
    } else {
      habitsObject = habitsArray.map((item, index) => {
        return <Button key={index} onClick={() => {
    
          this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
        }}>{item}</Button> 
        });
    }

    return (
      
      <Grid>
        <CssBaseline />
          {habitsObject}
          <EditButton />
      </Grid>

    );
  }
}

export default Habits; 
