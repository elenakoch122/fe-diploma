import { Outlet } from 'react-router-dom';
import './base.css';
import './App.css';

export default function App() {
  document.title = 'Главная';

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
