import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Heroes from './components/Heroes/Heroes';
import WhoAmI from './components/WhoAmI/WhoAmI';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Heroes />
      <WhoAmI />
    </div>
  );
}

export default App;
