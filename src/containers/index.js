import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Index = (props) => {
  function renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div>
          <Link>
            post.title,
            post.tags,
          </Link>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Posts</h1>
      Current Prop: {renderPosts()}
    </div>
  );
};


const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, null)(Index);
