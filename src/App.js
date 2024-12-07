import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TransitPassPage from './pages/TransitPassPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <TransitPassPage />
      <Footer />
    </div>
  );
};

export default App;
