import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { randomInt } from 'crypto';
import PageTable from './pages/PageTable/PageTable';
import InfoPage from './pages/infoPage/InfoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTable />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
