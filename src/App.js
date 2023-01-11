import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import List from './pages/List';
import Random from './pages/Random';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/List' element={<List />} />
        <Route path='/Random' element={<Random />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
