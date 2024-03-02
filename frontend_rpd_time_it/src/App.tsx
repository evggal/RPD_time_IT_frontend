import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { randomInt } from 'crypto';
import PageTable from './pages/PageTable';

/*
type Person = {
  Name: string,
  LastName: string,
  Age: number
}*/

function App() {
  
  /*const [n, setN] = useState<number>(0)
  const [Dania, SetDania] = useState<Person>({
    Name: "noName",
    LastName: "NoLastName",
    Age: 0
  } as Person)
  let str: string = "1"
  let num: number = Number(str);
  useEffect(() => {
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random() * 255).toString()}, ${Math.round(Math.random() * 255).toString()}, ${Math.round(Math.random() * 255).toString()})`
  }, [Dania])*/
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTable />} />
      </Routes>
      </BrowserRouter>
      {/* 
      <h1 onClick={() => setN(n => n + 1)}>{n}</h1>
      <input type='text' onChange={(e) => SetDania(n => { return { ...n, Name: e.target.value } })}></input>
      <input type='text' onChange={(e) => SetDania(n => { return { ...n, LastName: e.target.value } })}></input>
      <input type='text' onChange={(e) => SetDania(n => { return { ...n, Age: Number(e.target.value) } })}></input>
      <h2>
        {Dania.Name}
      </h2>
      <h2>
        {Dania.LastName}
      </h2>
      <h2>
        {Dania.Age}
      </h2>
    */}
    </div>
  );
}
export default App;
