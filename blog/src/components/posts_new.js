import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for Post'
  },
  categories: {
    type: 'input',
  label: 'Enter some categories for this post'
  },
  content: {
    type: 'textarea',
    label: 'Post Contents'
  }
};


class PostsNew extends Component{
  static contextTypes = {
    router: PropTypes.object
  } //look into all parents until you find router >> <Router ....>

  onSubmit(props){
    this.props.createPost(props)
      .then(() => {
        //blog post has been created, navigate the user to the index
        //we navigate by calling this.context.router.push with the new
        //path to navigate to.
        this.context.router.push('/');
      });

  }
renderField(fieldConfig, field){
  const fieldHelper = this.props.fields[field];
  <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
    <label>Title</label>
    <input type="text" className="form-control" { ...title } />
    <div className="text-help">
      {title.touched ? title.error : '' }
    </div>
  </div>
}

  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props; //from redux-form

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
          <label>Title</label>
          <input type="text" className="form-control" { ...title } />
          <div className="text-help">
            {title.touched ? title.error : '' }
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
          <label>Categories</label>
          <input type="text" className="form-control" { ...categories } />
          <div className="text-help">
            {categories.touched ? categories.error : '' }
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
          <label>Title</label>
          <textarea type="text" className="form-control" { ...content } />
          <div className="text-help">
            {content.touched ? content.error : '' }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
  </form>
    );
  }
}

function validate(values){
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if(!values[field]){
      error[field] = `Enter a ${field}`;
    }
  })

  // if(!values.title) errors.title = "Enter a username";
  // if(!values.categories) errors.categories = "Enter a category";
  // if(!values.content) errors.content = "Enter some content";
  return errors;
}

//connect first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS),//['title', 'categories', 'content'];
  validate
}, null, { createPost })(PostsNew);
