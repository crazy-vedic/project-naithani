import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './index.css';
import myPage from './main';

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path='/projects/naithani' element={()=>{<p>working?</p>;}} /> {/* Here it is used */}
      <Route
        path='/projects/naithani/*'
        element={
          <Navigate to="/projects/naithani" state={{ from: location.pathname }} />
        }
      />
    </Routes>
  );
}


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
