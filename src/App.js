import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

import Views from './components/Views';

import Registers from './components/Registers';
import Login from './components/Login';
import Myview from './components/Myview';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<Views/>}/>
        <Route path='/reg' element={<Registers/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/myview' element={<Myview/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
