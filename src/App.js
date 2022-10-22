import './App.css';
import Landing from './pages/Landing';
import Login from './pages/login';
import Tentang from './components/Landing/Tentang';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />          
        <Route path="/detail" element={<Tentang />}/>
    </Routes>
  );
}

export default App;
