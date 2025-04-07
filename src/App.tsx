import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './presentation/components/organism/navbar/Navbar'
import { navItems } from './data/navItems'

function App() {

  return (
    <>
      <div className='min-w- screen-full flex flex-col'>
          <nav className="w-full bg-neutral-100 text-black">
          <Navbar items={navItems} />
        </nav>
      </div>
      <HomePage/>
    </>
  )
}

export default App
