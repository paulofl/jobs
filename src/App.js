import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Depositions from './pages/Depositions'
import Footer from './components/Footer';
import Register from './components/Register';
import CompaniesList from './pages/CompaniesList';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/depositions' exact component={Depositions}/>
          <Route path='/sign-up' exact component={Register}/>
          <Route path='/companies' exact component={CompaniesList}/>
          <Route path='/support' exact component={SupportPage}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
