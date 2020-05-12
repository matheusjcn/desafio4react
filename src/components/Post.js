import React from 'react';

function Post(key, post) {
  return (
    <div>
      <div>
        <i class="material-icons">mood</i>
        <span>{post.author.name}</span>
        <p>{post.date}</p>
      </div>

    </div>
  );
}

export default Post;
