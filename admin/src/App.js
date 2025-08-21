import logo from './logo.svg';
import './App.css';
import Header from './HOC/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Pages/Products';
import Category from './Pages/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          {/* <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} /> */}
          {/* Add more nested routes here */}
          {/* <Route path="*" element={<NotFound />} /> */}
           <Route path="products" element={<Products />} />
           <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
