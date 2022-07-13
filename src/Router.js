import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Movie from './pages/Movie/Movie';
import People from './pages/People/People';
import Mypage from './pages/Mypage/Mypage';
import Components from './components/Components';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/" element={<Login />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
