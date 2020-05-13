import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Autor1",
          avatar: 'url',
        },
        date: "03 jun 2019",
        content: "I am Kratos of Sparta...",
        comments: [
          {
            id: 1,
            author: {
              name: "Coment1",
              avatar: "url"
            },
            content: "Conteudo comment"
          }
        ]
      },

      {
        id: 2,
        author: {
          name: "Autor2",
          avatar: 'url',
        },
        date: "04 jun 2019",
        content: "I am Demostenes of Athenas...",
        comments: [
          {
            id: 1,
            author: {
              name: "Coment2",
              avatar: "url"
            },
            content: "Conteudo comment dmstn, more content things, how how how how how howhow "
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
        </ul>
      </div>
    );
  };
}

export default PostList;
