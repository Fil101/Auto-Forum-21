import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { auth } from './redux/actions/authActions';
import { fetchBrands } from './redux/actions/brandsActions';
// import { fetchModels } from './redux/actions/modelsActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
    dispatch(fetchBrands());
    // dispatch(fetchModels());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Brands />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:brandId" element={<Models />} />
        <Route path="/models/:modelId" element={<Community />} />
        <Route path="/models/:modelId/photos" element={<PhotoAlbum />} />
        <Route path="/models/:modelId/articles" element={<ArticleList />} />
        <Route path="/models/:modelId/articles/:id" element={<Article />} />
        <Route path="/personal/:userId" element={<Personal />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
