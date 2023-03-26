import 'bootstrap/dist/css/bootstrap.min.css';
import unitData from './components/unitInfo/unitData';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import ClassInfo from './components/classInfo/classInfo';

import UnitPage from './components/unitInfo/unitPage';
import UnitView from './components/unitInfo/unitView';
function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<UnitPage />} />
          <Route path="units/:name" element={<UnitView />} />
          <Route path="classes" element={<ClassInfo />} />
          <Route path="*" element={<NavBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
