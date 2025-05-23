import './App.css';
import Navbar from './presentation/components/organism/navbar/Navbar';
import { navItems } from './data/navItems';
import AppRoutes from './infrastructure/router/AppRoutes';
import PageTransition from './presentation/components/organism/page-transition/PageTransition';
import { Toaster } from 'react-hot-toast';
import ParticlesBackground from './presentation/components/organism/particles-background/ParticulesBackground';

function App() {
  return (
    <div className="min-w-screen-full flex flex-col">
      <nav className="w-full bg-neutral-100 text-black">
        <Navbar items={navItems} />
      </nav>
      <ParticlesBackground variant="particles" />
      <PageTransition>
        <AppRoutes />
        <Toaster position="top-center" />
      </PageTransition>
    </div>
  );
}

export default App;
