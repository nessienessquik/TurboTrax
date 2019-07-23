import React, { Component } from "react";
import { API } from "aws-amplify";

import AddCircle from '@material-ui/icons/AddCircle';
import { withRouter } from 'react-router-dom';


class NewHabit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      content: ""
    };
  }

  validateForm() {
    return this.state.content.length > 0;
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
      await this.createHabit({
        content: this.state.content
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  createHabit(habit) {
    return API.post("turbotrax", "/turbotrax", {
      body: habit
    });
  }
  

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.handleSubmit}>

            <input
                className=""
                type="text"
                value={this.state.content}
                id="content"
                name="content"
                placeholder="Enter new track here"
                onChange={e => this.handleChange(e)}
                required
            />
        
        <button className="" type="submit" value="Submit"><AddCircle></AddCircle></button>

        </form>
      </div>
    );
  }
}

export default withRouter(NewHabit);