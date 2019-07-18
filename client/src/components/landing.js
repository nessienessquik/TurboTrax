import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    try {
      await Auth.signIn(this.state.username, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push("/main");
    } catch (e) {
      alert(e.message);
    }
  }
  

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center" className="landing">
        <h1>TurboTrax</h1>
        <h3>A Daily Habit Tracking App</h3>

        <form onSubmit={this.handleSubmit}>
          <TextField
          id="username"
          label="Username"
          value={this.state.username}
          onChange={e => this.handleChange(e)}
          margin="normal"
          variant="filled"
          className="landingForm"
        />
          <TextField
          id="password"
          label="Password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
          margin="normal"
          variant="filled"
          className="landingForm"
        />

          <Button variant="contained" type="submit" value="Submit" className="landingForm">Log-In</Button>
        </form>
      </Grid>
    );
  }
}
