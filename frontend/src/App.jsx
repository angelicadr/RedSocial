import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/new' element={<NewPost />} />
    </Routes>
  );
}