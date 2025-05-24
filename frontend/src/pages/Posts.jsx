import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get('http://localhost:3002/api/posts').then(res => setPosts(res.data));
  }, []);

  const like = async (id) => {
    await API.post(`http://localhost:3002/api/posts/${id}/like`);
    const updated = posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p);
    setPosts(updated);
  };

  return (
    <div>
      <h1>Publicaciones</h1>
      {posts.map(p => (
        <div key={p.id}>
          <p>{p.mensaje}</p>
          <p>{p.fecha}</p>
          <p>Likes: {p.likes}</p>
          <button onClick={() => like(p.id)}>Like</button>
        </div>
      ))}
    </div>
  );
}