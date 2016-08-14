import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { fetchPost, deletePost, updatePost } from '../actions';

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      isEditing: false,
      title: '',
      tags: '',
      content: '',
      currentAuthor: this.props.post.author,
    };
    this.editingMode = this.editingMode.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onIconChange = this.onIconChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onEditClick() {
    if (this.props.auth) {
      if (this.state.isEditing) {
        this.setState({
          isEditing: false,
        });
        this.props.updatePost(this.state);
      } else {
        this.setState({
          isEditing: true,
        });
      }
    }
  }

  onIconChange() {
    if (this.state.isEditing) {
      return (<i className="fa fa-check-square-o fa-5x" onClick={() => {
        this.onEditClick();
        this.props.updatePost(this.state);
      }} />);
    } else {
      return (<i className="fa fa-pencil-square-o fa-5x" onClick={() => { this.onEditClick(); }} />);
    }
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

  editingMode(event) {
    if (this.state.isEditing) {
      return (
        <div className="blogBody">
          <div>
            <input type="text" onChange={this.onTitleChange} value={this.state.input} placeholder={this.props.post.title} />
          </div>
          <div>
            <input type="text" onChange={this.onTagsChange} value={this.state.input} placeholder={this.props.post.tags} />
          </div>
          <div>
            <textarea id="textspace" onChange={this.onContentChange} value={this.state.input} placeholder={this.props.post.content} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="blogBody">
          <h1 dangerouslySetInnerHTML={{ __html: marked(this.props.post.title || '') }} />
          <h2 dangerouslySetInnerHTML={{ __html: marked(this.props.post.tags || '') }} />
          <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <button id="deleteButton" onClick={() => { this.props.deletePost(this.props.params.id); }}>Delete</button>
        {this.onIconChange()}
        {this.editingMode()}
        Last Edited By: {this.props.post.author}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
    auth: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Show);
