import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import AppleHome from './components/appleHome'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Route path='/' exact render={()=> <AppleHome />} />
      </div>
    );
  }
}

export default App;
