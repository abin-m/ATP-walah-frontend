
import './App.css';
import Dashboard from './pages/Dashboard';
import CreateATPDoc from './pages/CreateATPDoc';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewAllATP from './pages/ViewAllATP';
import ATPDetails from './pages/ATPDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/create" element={<CreateATPDoc />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-all" element={<ViewAllATP />} />
        <Route path="/view-atp" element={<ATPDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
