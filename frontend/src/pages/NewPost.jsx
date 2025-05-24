import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('http://localhost:3002/api/posts', { mensaje });
    navigate('/posts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder='Escribe tu publicación...' />
      <button type='submit'>Publicar</button>
    </form>
  );
}