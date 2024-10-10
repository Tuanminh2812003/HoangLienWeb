import './App.css';
import { Form, Route, Routes } from 'react-router-dom';
import LayoutDefault from './Layouts/LayoutDefault';
import Home from './Layouts/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
