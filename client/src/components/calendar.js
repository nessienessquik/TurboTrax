import React from 'react';
// import { BrowserRouter as Link } from "react-router-dom";

// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    background: 'linear-gradient(#10a3c5, #c9d0e0)',
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
  // let todayObject = new Date();
  // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // let todayString = todayObject.toLocaleDateString('default', options);

    const classes = useStyles();

    return (

      <Grid container spacing={0} direction="column" alignItems="center" justify="center" component="main" className={classes.root} >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={6} className={classes.content}component={Paper}>

          <Grid item xs={12} sm={8} md={5} elevation={6} square>
            <Typography component="h1" className={classes.logo}>TurboTrax</Typography>
            <Typography component="h1" className={classes.logo}>Calendar</Typography>
            <Button href='./main'><KeyboardBackspace>Back to Habits</KeyboardBackspace></Button>
          </Grid>

        </Grid>

      </Grid>
    );

}
