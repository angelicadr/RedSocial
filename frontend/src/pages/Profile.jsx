import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get('http://localhost:3001/api/auth/profile').then(res => setUser(res.data));
  }, []);

  return user ? (
    <div>
      <h1>Perfil</h1>
      <p>Nombre: {user.nombre}</p>
      <p>Apellido: {user.apellido}</p>
      <p>Alias: {user.alias}</p>
      <p>Fecha Nacimiento: {user.fechaNacimiento}</p>
    </div>
  ) : <p>Cargando...</p>;
}