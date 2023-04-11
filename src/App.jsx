import 'bootstrap/dist/css/bootstrap.min.css';
import unitData from './components/unitInfo/unitData';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassInfo from './components/classInfo/classInfo';

import UnitPage from './components/unitInfo/unitPage';
import UnitView from './components/unitInfo/unitView/unitView';
import EngageNav from './components/navBar';
import EmblemView from './components/emblemInfo/emblemView/emblemView';
import ClassView from './components/classInfo/classView/classView';
function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<EngageNav />}>
          <Route index element={<UnitPage />} />
          <Route path="units/:name" element={<UnitView />} />
          <Route path="classes/:name" element={<ClassView />} />
          <Route path="emblems/:name" element={<EmblemView />} />
          <Route path="*" element={<UnitPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
