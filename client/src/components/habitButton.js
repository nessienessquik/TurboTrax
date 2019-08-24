import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { API } from "aws-amplify";

class habitButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isToggleOn: "false",
        content: this.props.habitName,
        categoryId: this.props.categoryId,
        userId: this.props.habitUserId,
        dataId: "",
        type: "data",
        status: "inactive"
    };
  }

  createTrax(trax) {
      console.log(trax);
    return API.post("turbotrax", "/turbotrax/track", {
      body: trax
    });
  }

  deleteTrax(trax) {
    return API.del("turbotrax", `/track/${this.state.dataId}`);
  }

  render() {

    return (
      
        <button className={this.state.status} onClick={() => {

            // post / remove tracks from database

            if (this.state.status === "inactive") {
                // establishes toggle for css
                this.setState({status: "active"}, function(){ });
                 // post tracks from database
                let postTrack = async event => {
                    try {
                      await this.createTrax(this.state);
                    } catch (e) {
                      alert(e);
                    }
                  }

                postTrack();

            } else {
                // establishes toggle for css
                this.setState({status: "inactive"}, function(){ });
                
                let handleDelete = async event => {
                
                  const confirmed = window.confirm(
                    "Are you sure you want to delete this note?"
                  );
                
                  if (!confirmed) {
                    return;
                  }

                  try {
                    await this.deleteTrax();

                  } catch (e) {
                    alert(e);

                  }
                }
                
                handleDelete()
                

            }

        }}>{this.state.content}</button>

    );
  }
}

export default habitButton; 
