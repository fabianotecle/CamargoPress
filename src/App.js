import React from 'react';
import './App.css';
import Header from './components/Header';
import QuemSomos from './components/QuemSomos';
import Locais from './components/Locais';
import Entregas from './components/Entregas';
import ProntoComecar from './components/ProntoComecar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <QuemSomos />
      <Locais />
      <Entregas />
      <ProntoComecar />
      <Footer />
    </div>
  );
}

export default App;
