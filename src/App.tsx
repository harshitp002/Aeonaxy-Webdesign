// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductLink from './components/ProductLink';
import SellerTools from './components/SellorTools/SellerTools';



const App = () => {

  return (
      <Router >
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<ProductLink />} />
          <Route path="/seller-tools" element={<SellerTools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

