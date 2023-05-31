import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
