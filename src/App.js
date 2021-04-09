import './App.scss';
import Navbar from'./components/Navbar/Navbar';
import Tour from'./pages/tours';
import Home from'./pages/home';
import About from'./pages/about';
import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom';
function App() {
  return (
    <main>
      <Router>
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
        <Route path="/tours" exact component={Tour}></Route>
      </Switch>
      </Router>
    
    </main>
  
  );
}

export default App;
