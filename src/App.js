import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={< Home />} />
        
        <Route path='/about' element={< About />} />

        <Route path='/gallery' element={< Gallery />} />
        <Route path='/gallery/:gallery' element={< Gallery />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
