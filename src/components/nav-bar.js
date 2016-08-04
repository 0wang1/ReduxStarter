import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
