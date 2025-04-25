import './App.css';
import Navbar from './presentation/components/organism/navbar/Navbar';
import { navItems } from './data/navItems';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './infrastructure/router/AppRoutes';
import PageTransition from './presentation/components/organism/page-transition/PageTransition';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="min-w-screen-full flex flex-col">
        <nav className="w-full bg-neutral-100 text-black">
          <Navbar items={navItems} />
        </nav>
        <PageTransition>
          <AppRoutes />
          <Toaster position="top-center" />
        </PageTransition>
      </div>
    </BrowserRouter>
  );
}

export default App;
