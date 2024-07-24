import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/router';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
        <Navigation />
        <Routing />
    </Router>
  );
}

export default App;
