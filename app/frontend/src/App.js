import './styles/index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Customers from './pages/Customers';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/customers" element={ <Customers /> } />
    </Routes>
  );
}

export default App;
