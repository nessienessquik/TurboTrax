import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
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

    const classes = useStyles();

    return (

      <Grid container spacing={0} direction="column" alignItems="center" justify="center" component="main" className={classes.root} >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={6} className={classes.content} >
          <Typography component="h1" className={classes.logo}>TurboTrax</Typography>
          <Typography component="h3" className={classes.strapline}>Sign-up for a free account</Typography>

            <form className={classes.form} noValidate>

              <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Name" autoComplete="name" autoFocus className={classes.input}></TextField>
              <TextField variant="outlined" margin="normal" required fullWidth id="email" label="E-Mail Address" autoComplete="E-mail" autoFocus className={classes.input}></TextField>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" className={classes.input}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign-Up
            </Button>
            
            </form>

        </Grid>

      </Grid>
    );

}
