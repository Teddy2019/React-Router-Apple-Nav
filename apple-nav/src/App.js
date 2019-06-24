import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import AppleHome from './components/appleHome';
import Mac from './components/Mac';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Route path='/' exact render={()=> <AppleHome />} />
        <Route path='/Mac' exact render={()=> <Mac />} />
      </div>
    );
  }
}

export default App;
