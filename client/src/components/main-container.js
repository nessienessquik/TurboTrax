import React, { Component, Fragment } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from 'react-router-dom';

import Habits from './habits';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

class Main extends Component{

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/");
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    // Date display
    let todayObject = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let todayString = todayObject.toLocaleDateString('default', options);

    return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" component="main" className="root" >
      <CssBaseline />

      <Grid item xs={12} sm={8} md={6} className="content" component={Paper} >

        <Typography component="h1" className="logo">TurboTrax</Typography>
        <Typography component="h3" className="strapline">Good Morning, Joe</Typography>
        <Typography component="h4" className="strapline">What did you do today?</Typography>

        <Grid>
          <Typography>{todayString}</Typography>
          <Habits />
          <Button><Link href='./calendar'>View Calendar</Link></Button>
          <button onClick={this.handleLogout}>Logout</button>
        </Grid>

      </Grid>

    </Grid>
    );

    }
  }

export default withRouter(Main);