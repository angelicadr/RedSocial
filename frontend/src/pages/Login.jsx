import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('http://localhost:3001/api/auth/login', { usuario, clave });
    login(res.data.token);
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder='Usuario' />
      <input type='password' value={clave} onChange={(e) => setClave(e.target.value)} placeholder='Clave' />
      <button type='submit'>Entrar</button>
    </form>
  );
}