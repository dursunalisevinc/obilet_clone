import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Dashboard from './views/Dashboard';
import NoPage from './views/NoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}/>
      </Route>
      <Route path="*" element={<NoPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
