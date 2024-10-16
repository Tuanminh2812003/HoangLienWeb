import './App.css';
import { Form, Route, Routes } from 'react-router-dom';
import LayoutDefault from './Layouts/LayoutDefault';
import Home from './Layouts/Home';
import About from './Layouts/About';
import Product from './Layouts/Product';
import Contact from './Layouts/Contact';
import ProductDetail from './Layouts/ProductDetail';
import Blog from './Layouts/Blog';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LayoutDefault/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/ve_chung_toi' element={<About/>}/>
          <Route path='/san_pham' element={<Product/>}/>
          <Route path='/lien_he' element={<Contact/>}/>
          <Route path='/pho_nhi_chin' element={<ProductDetail/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
