import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Profile from './Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
