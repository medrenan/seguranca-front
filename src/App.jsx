import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cadastro from './pages/Cadastro';
import Economia from './pages/Economia';
import Esportes from './pages/Esportes';
import Home from './pages/Home';
import Login from './pages/Login';
import Noticia from './pages/Noticia';
import Politica from './pages/Politica';

export default function App() {

  axios.interceptors.request.use(config => {
    if(localStorage["user"]) {
      config.headers.Authorization = localStorage["user"]
    }
    return config
  })
  axios.interceptors.response.use(res => {
      return res
    }, error => {
      if(error.response.status === 403) {
        alert('Não autorizado!')
      }
      throw error
  })

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/esportes" element={<Esportes/>} />
            <Route path="/politica" element={<Politica/>} />
            <Route path="/economia" element={<Economia/>} />
            <Route path="/noticia/:id" element={<Noticia />} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}