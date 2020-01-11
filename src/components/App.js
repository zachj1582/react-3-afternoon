import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post/Post';

import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts')
    .then(res => {
      console.log(res)
      this.setState({posts: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  updatePost(id,text) {
  axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text}).then(res => {
    this.setState({posts: res.data})
  })
  .catch(err => {
    console.log(err)
  })
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
    .then(res => {
      this.setState({posts: res.data})
    })
  }

  createPost(text) {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, {text: text})
    .then(res => {
      this.setState({posts: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose 
          createPostFn={this.createPost}/>
          {
            posts.map(post => (
              <Post key={post.id} 
                    text={post.text} 
                    date={post.date}
                    id={post.id}
                    updatePostFn={this.updatePost}
                    deletePostFn={this.deletePost} />
            ))
          }
          
        </section>
      </div>
    );
  }
}

export default App;
