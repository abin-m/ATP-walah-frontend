
import './App.css';
import Dashboard from './components/Dashboard';
import CreateATPDoc from './pages/CreateATPDoc';
import TestPage from './pages/TestPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/create" element={<CreateATPDoc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
