import React, { Component } from 'react';
import { signinUser } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
  }
  onUserChange(event) {
    this.setState({ email: event.target.value });
  }
  onPassChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <div>
          <input onChange={this.onUserChange} value={this.state.input} type="text" placeholder="Email" />
        </div>
        <div>
          <input onChange={this.onPassChange} value={this.state.input} type="text" placeholder="Password" />
        </div>
        <div>
          <input id="submitID" onClick={() => { this.props.signinUser(this.state); }} type="submit" />
          <Link to="/">
            <button id="cancelID">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}


export default connect(null, { signinUser })(SignIn);
