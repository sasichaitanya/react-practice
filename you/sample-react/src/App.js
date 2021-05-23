import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// custom components
import About from './components/about';
import Shop from './components/shop';
import Nav from './components/nav';
import UserDetails from './components/userdetail';

// two types of components 1) functional and 2) Class components 
// this is functional component
// functional component is a simple js function which is returning jsx 
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:userDetail" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
