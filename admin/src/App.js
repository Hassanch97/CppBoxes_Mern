import logo from './logo.svg';
import './App.css';
import Header from './HOC/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Pages/Products';
import Category from './Pages/Category';
import BlogCategory from './Pages/BlogCategory';
import NewsLetter from './Pages/NewsLetter';
import Pages from './Pages/Pages';
import Portfolio from './Pages/Portfolio';
import Reviews from './Pages/Reviews';
import FAQS from './Pages/FAQS';
import Redirections from './Pages/Redirections';

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
          <Route path="blogcategory" element={<BlogCategory />} />
          <Route path="newsletter" element={<NewsLetter />} />
          <Route path="pages" element={<Pages />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="faqs" element={<FAQS />} />
          <Route path="redirections" element={<Redirections />} />
          

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
