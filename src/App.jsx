import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import Welcome from './components/welcome';
import ClassInfo from './components/classInfo/classInfo';
import EmblemInfo from './components/emblemInfo/emblemInfo';
import WeaponsAndItems from './components/weaponsAndItems/weaponsAndItems';
import Misc from './components/misc/misc';
function App() {
  return (
    <EmblemInfo />
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
