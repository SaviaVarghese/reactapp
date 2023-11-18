import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

import Views from './components/Views';

import Registers from './components/Registers';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<Views/>}/>
        <Route path='/reg' element={<Registers/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
