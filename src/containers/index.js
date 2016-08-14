import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions';

class Index extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`} className="postings">
              {post.title}                                                          by: {post.author}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchPosts })(Index);
