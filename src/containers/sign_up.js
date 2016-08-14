import React, { Component } from 'react';
import { signupUser } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.onUserChange = this.onUserChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
  }
  onUserChange(event) {
    this.setState({ username: event.target.value });
  }
  onPassChange(event) {
    this.setState({ password: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <input onChange={this.onUserChange} value={this.state.input} type="text" placeholder="Username:" />
        </div>
        <div>
          <input onChange={this.onEmailChange} value={this.state.input} type="text" placeholder="Email:" />
        </div>
        <div>
          <input onChange={this.onPassChange} value={this.state.input} type="text" placeholder="Password:" />
        </div>
        <div>
          <input id="submitID" onClick={() => { this.props.signupUser(this.state); }} type="submit" />
          <Link to="/">
            <button id="cancelID">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}


export default connect(null, { signupUser })(SignUp);
