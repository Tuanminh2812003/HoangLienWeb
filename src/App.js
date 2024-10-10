import './App.css';
import { Form, Route, Routes } from 'react-router-dom';
import LayoutDefault from './Layouts/LayoutDefault';
import Home from './Layouts/Home';
import About from './Layouts/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/ve_chung_toi' element={<About/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
