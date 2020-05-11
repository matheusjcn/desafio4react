import React, { Component } from 'react';

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
      }
    ]
  }
}

export default PostList;
