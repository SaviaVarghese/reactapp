import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

import Views from './components/Views';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<Views/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
