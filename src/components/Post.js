import React from 'react';

function Post({ data }) {
  return (
    <div className="Conteiner">
      <div className="Post">
        <div className="divContent">
          <i class="material-icons">mood</i>
          <div className="people">
            <span>{data.author.name}</span>
            <p>{data.date}</p>
          </div>
          <h6>{data.content}</h6>

        </div>
      </div>
      {data.comments.map(comment => <Comentarios key={comment.id} data={comment} />) }

    </div>
  );
}

function Comentarios({data}) {
  return (
    <div className="ContentComent">
      <i class="material-icons">face</i>
      <div className="comment">
        <span>{data.author.name} </span>
        <p>{data.content}</p>
      </div>
    </div>
  );
}


export default Post;
