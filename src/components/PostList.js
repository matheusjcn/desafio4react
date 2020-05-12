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
        coments: [
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
        coments: [
          {
            id: 1,
            author: {
              name: "Coment2",
              avatar: "url"
            },
            content: "Conteudo comment dmstn"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.posts.map(post => <Post key={post.id}
              data={post} />)}
              .
          </li>
        </ul>
      </div>
    );
  };
}

export default PostList;
