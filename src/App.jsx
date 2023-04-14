import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UnitPage from './components/unitPage/unitPage';
import UnitView from './components/views/unitView';
import EngageNav from './components/navBar';
import EmblemView from './components/views/emblemView';
function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<EngageNav />}>
          <Route index element={<UnitPage />} />
          <Route path="units/:name" element={<UnitView />} />
          <Route path="emblems/:name" element={<EmblemView />} />
          <Route path="*" element={<UnitPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
