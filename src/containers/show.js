import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import marked from 'marked';

// class that will actually display the blog page

const prefix = 'cs52-blog.herokuapp.com/api/';

// Decides editing based on isEditing
function editingMode() {
  if (this.state.isEditing) {
    return <textarea id="textspace" value={this.props.note.text} onChange={this.onTextChange} />;
  } else {
    return <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
  }
}
// how do I get the buttons to do things
const Show = (props) => {
  return (
    <div>
      <Link to={`${prefix}new`}><button>Delete</button></Link>
      <button>Edit</button>
      <h1>this.props.params.id.title</h1>
      <h2>this.props.params.id.tags</h2>
      <body>this.props.params.id.contents</body>
    </div>
  );
};
// Is this how I retrieve all the information from the post? how do I tell if it's editing?
const mapStateToProps = (state) => (
  {
    posts: state.params.id,
    isEditing: state.isEditing,
  }
);

export default connect(mapStateToProps, null)(Show);
