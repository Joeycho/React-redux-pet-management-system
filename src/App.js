import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PetsContainer from './containers/PetsContainer';
import ClinicsContainer from './containers/ClinicsContainer';
import OwnersContainer from './containers/OwnersContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navbar />
        <div className="main">
        <Route exact path="/owner" component={OwnersContainer} />
        <Route exact path="/pet" component={PetsContainer} />
        <Route exact path="/clinic" component={ClinicsContainer} /> 
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
