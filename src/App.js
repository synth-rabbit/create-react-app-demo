import './App.scss';
import {Router} from '@reach/router';
import HomePage from '@home/containers/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path={'/'} />
      </Router>
    </div>
  );
}

export default App;
