import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Mainframe from './components/Mainframe/Mainframe';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Profile />
        <Mainframe />
      </main>
    </div>
  );
}

export default App;