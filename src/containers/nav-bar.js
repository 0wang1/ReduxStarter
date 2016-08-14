import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signoutUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthed: this.props.auth,
    };
    this.onLoginStatusChange = this.onLoginStatusChange.bind(this);
  }


  onLoginStatusChange() {
    if (this.props.auth) {
      return (
        <div>
          <Link to={'/'}>
            <button id="signButton" onClick={() => { this.props.signoutUser(); }}>Sign Out</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signin'}>
            <button id="signButton">Sign In</button>
          </Link>
          <Link to={'/signup'}>
            <button id="signButton">Sign Up</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>
                <i className="fa fa-gg fa-5x" aria-hidden="true" />
              </Link>
            </li>
            <li><input id="inputID" disabled="disabled" type="text" /></li>
            <li>
              <Link to={'/posts/new'}>
                <button id="blogButton">Create Blog</button>
              </Link>
            </li>
            <li>
              {this.onLoginStatusChange()}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}
export default connect(mapStateToProps, { signoutUser })(NavBar);
