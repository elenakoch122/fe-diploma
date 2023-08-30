import { Outlet } from 'react-router-dom';
import './base.css';
import './App.css';

import Header from './components/blocks/Header/Header';
import Footer from './components/blocks/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
