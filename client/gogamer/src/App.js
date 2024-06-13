import React, { useEffect } from 'react';
import './App.css';
import Phaser from 'phaser';
import GameScene from './components/GameScene';

function App() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'gameContainer',
      scene: GameScene,
    };
    new Phaser.Game(config);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Code Quest</h1>
      <div id="gameContainer"></div>
    </div>
  );
}

export default App;
