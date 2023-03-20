import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import Welcome from './components/welcome';
import ClassInfo from './components/classInfo/classInfo';
import EmblemInfo from './components/emblemInfo/emblemInfo';
import WeaponsAndItems from './components/weaponsAndItems/weaponsAndItems';
import Misc from './components/misc/misc';
import UnitInfo from './components/unitInfo/unitPage';
function App() {
  return (
    // <EmblemInfo />
    <UnitInfo />
    // <ClassInfo />
    // <BrowserRouter className="app">
    //   <Routes>
    //     <Route path="/" element={<NavBar />}>
    //       <Route index element={<Welcome />} />
    //       <Route path="units" element={<UnitInfo />} />
    //       <Route path="classes" element={<ClassInfo />} />
    //       <Route path="emblems" element={<EmblemInfo />} />
    //       <Route path="weapons&items" element={<WeaponsAndItems />} />
    //       <Route path="misc" element={<Misc />} />
    //       <Route path="*" element={<NavBar />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
