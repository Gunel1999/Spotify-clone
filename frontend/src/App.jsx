import React from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';
import Display from './components/Display';

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
