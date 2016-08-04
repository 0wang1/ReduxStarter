import React, { Component } from 'react';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }
  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }
  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Create A New Post</h1>
        <div>
          <input onChange={this.onTitleChange} value={this.state.input} type="text" placeholder="title" />
        </div>
        <div>
          <input onChange={this.onTagsChange} value={this.state.input} type="text" placeholder="tags" />
        </div>
        <div>
          <textarea onChange={this.onContentChange} value={this.state.input} type="text" placeholder="content" />
        </div>
        <div>
          <input id="submitID" onClick={() => { this.props.createPost(this.state); }} type="submit" />
          <button id="cancelID">Cancel</button>
        </div>
      </div>
    );
  }
}


export default connect(null, { createPost })(New);
