import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './presentation/components/organism/navbar/Navbar';
import { navItems } from './data/navItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="min-w-screen-full flex flex-col">
        <nav className="w-full bg-neutral-100 text-black">
          <Navbar items={navItems} />
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
