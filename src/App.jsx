import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
