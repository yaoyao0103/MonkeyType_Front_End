import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TypePage from './pages/TypePage/TypePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AccountPage from './pages/AccountPage/AccountPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SettingPage from './pages/SettingPage/SettingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TypePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/settings" element={<SettingPage/>}></Route>
        <Route path="/account" element={<AccountPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
