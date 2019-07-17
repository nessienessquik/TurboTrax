import React, { Component } from "react";
import { Auth } from "aws-amplify";


export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    this.setState({ isLoading: true });
  
    try {
      let email = this.state.email;
      let name = this.state.name
      const newUser = await Auth.signUp({

  

        username: this.state.username,
        password: this.state.password,
        attributes: {
          email,          // optional
          name, // optional - E.164 number convention
        },
      });
      this.setState({
        newUser
      });
    } catch (e) {
      alert(e.message);
    }
  
    this.setState({ isLoading: false });
  }
    
    handleConfirmationSubmit = async event => {
      event.preventDefault();
    
      this.setState({ isLoading: true });
    
      try {
        await Auth.confirmSignUp(this.state.username, this.state.confirmationCode);
        await Auth.signIn(this.state.username, this.state.password);
    
        this.props.userHasAuthenticated(true);
        this.props.history.push("/");
      } catch (e) {
        alert(e.message);
        this.setState({ isLoading: false });
      }
    }
    

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <label>Confirmation Code</label>
        <input
            className=""
            type="text"
            value={this.state.confirmationCode}
            id="confirmationCode"
            name="confirmationCode"
            placeholder="Enter Confirmation Code"
            onChange={e => this.handleChange(e)}
            required
          />
    
        <p>Please check your email for the code.</p>

        <input className="" type="submit" value="Submit" />

      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            className=""
            type="text"
            value={this.state.name}
            id="name"
            name="name"
            placeholder="Your Name"
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            className=""
            type="text"
            value={this.state.username}
            id="username"
            name="username"
            placeholder="Username"
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            className=""
            type="text"
            value={this.state.email}
            id="email"
            name="email"
            placeholder="E-Mail Address"
            onChange={e => this.handleChange(e)}
            required
          />
          <input
            className=""
            type="password"
            value={this.state.password}
            id="password"
            name="password"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
            required
          />
          <input className="" type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
