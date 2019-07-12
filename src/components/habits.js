import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
 
  },
}));

export default function Habits() {

  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  
  let habitsArray = [ "Ran 10 Miles", "Got 8+ Hours of Sleep", "Cooked Dinner", "Meditated", "Practiced Guitar", "Drank Water"];

  let habitsObject = habitsArray.map((item, index) => {
  return <Button key={index} onClick={handleClick}>{item}</Button>

  });

  const classes = useStyles();

    return (

      <Grid className={classes.root} >
        <CssBaseline />
          {habitsObject}
      </Grid>
    );

}

// class Habits extends React.Component {



//   render() {
    
//     let habitsArray = [ "Ran 10 Miles", "Got 8+ Hours of Sleep", "Cooked Dinner", "Meditated", "Practiced Guitar", "Drank Water"];

//     handleClick() => {
//       console.log("clicked");
//     }
  
//     let habitsObject = habitsArray.map((item, index) => {
//     return <Button key={index} onClick={handleClick}>{item}</Button> }

//     return (

//       <Grid className={classes.root} >
//         <CssBaseline />
//           {habitsObject}
//       </Grid>
//     );
//   }
// }

// export default Habits; 
