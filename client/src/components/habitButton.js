import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { API } from "aws-amplify";

class habitButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isToggleOn: "false",
        content: this.props.habitName,
        trackId: this.props.habitTrackId,
        userId: this.props.habitUserId,
        attachment: "trax"
    };
  }

  createTrax(trax) {
      console.log(trax);
    return API.post("turbotrax", "/turbotrax", {
      body: trax
    });
  }

  render() {

    return (
      
        <button className={this.state.isToggleOn} onClick={() => {

            // post / remove tracks from database

            if (this.state.isToggleOn === "false") {

                // establishes toggle for css
                this.setState({isToggleOn: "true"}, function(){ });

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
                this.setState({isToggleOn: "false"}, function(){ });

                // remove tracks from database
            }

        }}>{this.state.content}</button>

    );
  }
}

export default habitButton; 
