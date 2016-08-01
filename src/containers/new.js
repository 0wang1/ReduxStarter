import React, { Component } from 'react';
import { Link } from 'react-router';

const prefix = 'cs52-blog.herokuapp.com/api/';

// Should I be making this into a CC?
class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      inputTitle: '',
      inputTags: '',
      inputContent: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onTitleChange(event) {
    this.setState({ inputTitle: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ inputTags: event.target.value });
  }
  onContentChange(event) {
    this.setState({ inputContent: event.target.value });
  }
  // Needs to get access to the state in order to add the post
  handleSubmit(event) {
    this.props.onSubmit(this.state.input);
    this.state.input = '';
  }

  render() {
    return (
      <div>
        <h1>Create A New Post</h1>
        <div>
          <input onChange={this.onTitleChange} value={this.state.input} type="text" placeholder="title" />
        </div>
        <div>
          <input onChange={this.onTagChange} value={this.state.input} type="text" placeholder="tags" />
        </div>
        <div>
          <textarea onChange={this.onContentChange} value={this.state.input} type="text" placeholder="content" />
        </div>
        <div>
          <Link to={`${prefix}new`}>
            <input id="submitID" onClick={this.handleSubmit} type="submit" />
            <button id="cancelID">Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default New;
