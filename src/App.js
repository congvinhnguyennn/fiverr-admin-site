
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Home/Home';
import CareerList from './CareerList/CareerList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:careerId" element={<CareerList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
