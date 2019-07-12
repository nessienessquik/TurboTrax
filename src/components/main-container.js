import React from 'react';
import Habits from './habits.js';
// import { BrowserRouter as Link } from "react-router-dom";

// import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/RadioGroup';
// import Checkbox from '@material-ui/core/RadioGroup';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1528872042734-8f50f9d3c59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  input: {
      backgroundColor: '#82c4decf',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    fontFamily: 'Quantico',
    fontWeight: '700',
    fontSize: '5em',
    lineHeight: '85%',
    textAlign: 'center',
  },
  strapline: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '2em',
    textAlign: 'center',
  },
}));

export default function Landing() {

  // Date display
  let todayObject = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let todayString = todayObject.toLocaleDateString('default', options);

    const classes = useStyles();

    return (

      <Grid container spacing={0} direction="column" alignItems="center" justify="center" component="main" className={classes.root} >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={6} className={classes.content} >

          <Typography component="h1" className={classes.logo}>TurboTrax</Typography>
          <Typography component="h3" className={classes.strapline}>Good Morning, Joe</Typography>
          <Typography component="h4" className={classes.strapline}>What did you do today?</Typography>

          <Grid>
            <Typography>{todayString}</Typography>
            <Habits />
          </Grid>

        </Grid>

      </Grid>
    );

}
