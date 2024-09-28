
import React, { useState } from 'react';
import axios from '../services/axiosInstance';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    axios.put(`/posts/${post._id}/like`).then(res => setLikes(res.data.likes));
  };

  const handleComment = () => {
    axios.post(`/posts/${post._id}/comment`, { user: 'Anonymous', text: commentText })
         .then(res => setComments(res.data.comments));
  };

  return (
    <div>
      <h3>{post.user}</h3>
      <p>{post.content}</p>
      {post.media && <img src={`http://localhost:5000/uploads/${post.media}`} alt="media" />}
      <button onClick={handleLike}>Like {likes}</button>
      <div>
        <input
          type="text"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleComment}>Comment</button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <p key={index}><strong>{comment.user}:</strong> {comment.text}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
