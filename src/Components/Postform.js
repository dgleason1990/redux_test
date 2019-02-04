import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

class Postform extends Component {
    state = {
        title: '',
        body: ''
    }

    onChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value});
        console.log(this.state)
    }

    onSubmit=(e)=>{
        e.preventDefault();
        let post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post);
    }
  render() {
    return (
      <div>
        <h1> Add post </h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label> <br/>
                <input name='title' onChange={this.onChange} value={this.state.title}/>
            </div>
            <div>
                <label>Body: </label> <br/>
                <textarea name='body' onChange={this.onChange} value={this.state.body}/>
            </div>
            <br/>
            <button type='submit'> Submit</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform);