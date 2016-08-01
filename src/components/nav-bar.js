import React, { Component } from 'react';
import { Link } from 'react-router';

const prefix = 'cs52-blog.herokuapp.com/api/';

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
              <Link to={`${prefix}posts/index`}><i className="fa fa-gg" aria-hidden="true" /></Link>
            </li>
            <li><input id="inputID" disabled="disabled" type="text" /></li>
            <li>
              <Link to={`${prefix}posts/new`}><button>Posts</button></Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
