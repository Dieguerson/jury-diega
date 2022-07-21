import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Projects } from './routes/Projects'
import { Login } from './routes/Login'
import {Home} from './routes/Home'

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="login" element={<Login />} />
        <Route
          path="*" // No Match route
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);