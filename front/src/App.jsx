import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;