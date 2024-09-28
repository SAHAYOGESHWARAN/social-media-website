import React, { useState, useEffect } from 'react';
import axios from './services/axiosInstance';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Social Media Feed</h1>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default App;
