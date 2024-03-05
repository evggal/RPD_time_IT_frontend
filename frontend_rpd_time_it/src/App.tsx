import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, redirect, Navigate } from 'react-router-dom';
import { randomInt } from 'crypto';
import PageTable from './pages/PageTable/PageTable';
import InfoPage from './pages/infoPage/InfoPage';
import ManagePage from './pages/ManagePage/Manage';
import { Critical, rpd } from './interface/interface';
import Header from './elemOnPages/header/Header';
import { GetAllCritical, SearchRpd } from './ApiAccess/RpdRepository';
import ChangeTemplatePage from './pages/changeTemplatePage/ChangeTemplatePage';
import ChangeTemplateNoCriticalPage from './pages/changeTemplateNoCriticalPage/ChangeTemplateNoCriticalPage';


function App() {
  const [selectedRpds, setSelectedRpds] = useState<Array<rpd>>([])
  const [rpds, setRpds] = useState<Array<rpd>>([])
  useEffect(() => {
    SearchRpd({}).then((data) => {
      setRpds(data)
    })
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTable rpds={rpds} setRpds={setRpds} selected={selectedRpds} setSelectedRpds={setSelectedRpds}/>} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/manage" element={<ManagePage selected={selectedRpds}/>} />
          <Route path="/changeTemplate" element={<ChangeTemplatePage/>}  />
          <Route path='/changeTemplate2' element={<ChangeTemplateNoCriticalPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
