import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";


import Routes from "./routes";

import './css/App.css';

import Container from '@material-ui/core/Container';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
  
    this.props.history.push("/");
  }
  
  render() {

      const childProps = {
        isAuthenticated: this.state.isAuthenticated,
        userHasAuthenticated: this.userHasAuthenticated
      };
    
      return (
        !this.state.isAuthenticating &&
        <div className="app">
          {/* <div>
            <Switch>
                {this.state.isAuthenticated
                  // ? <button onClick={this.handleLogout}>Logout</button>
                  // : <Fragment>
                  //     <Link to="/register">
                  //       <button>Register</button>
                  //     </Link>
                  //     <Link to="/">
                  //       <button>Login</button>
                  //     </Link>
                  //   </Fragment>

                  // ? <Landing />
                  // : <Main />
                }
              </Switch>
            </div> */}

          <Routes childProps={childProps} />
        </div>
      );
    }
  }

export default withRouter(App);
