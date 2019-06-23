import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
