import React, { Component } from "react";
import { Auth } from "aws-amplify";



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
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <input
            className=""
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            className=""
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
            required
          />
          <input className="" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
