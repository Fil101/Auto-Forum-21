import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Article from './components/pages/Articles/Article';
import ArticleList from './components/pages/Articles/ArticleList/ArticleList';
import Login from './components/pages/Auth/Login/Login';
import Registration from './components/pages/Auth/Registration/Registration';
import Community from './components/pages/Community';
import Personal from './components/pages/Personal';
import PhotoAlbum from './components/pages/PhotoAlbum';
import Brands from './components/pages/Start/Brands';
import Models from './components/pages/Start/Models';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:brandId" element={<Models />} />
        <Route path="/brands/:brandId/:modelId" element={<Community />} />
        <Route path="/brands/:brandId/:modelId/photos" element={<PhotoAlbum />} />
        <Route path="/brands/:brandId/:modelId/articles" element={<ArticleList />} />
        <Route path="/brands/:brandId/:modelId/articles/:id" element={<Article />} />
        <Route path="/personal/:userId" element={<Personal />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
