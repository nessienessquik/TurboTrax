import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import AddNewButton from './addNewButton.js';
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
      habitsArray: ["Ran 10 Miles", "Got 8+ Hours of Sleep", "Cooked Dinner", "Meditated", "Practiced Guitar", "Drank Water"],
      // habitsArray: [],
    };
  }

  render() {
    let habitsArray = this.state.habitsArray;
    let habitsObject;
    
    if (habitsArray.length <= 0){
      habitsObject = <div>Please add habits below.</div>
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
          <AddNewButton />
          <EditButton />
      </Grid>

    );
  }
}

export default Habits; 
