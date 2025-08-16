import StartScene from './src/scenes/StartScene.js';
import GameScene from './src/scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#222',
    scene: [StartScene, GameScene]
};

new Phaser.Game(config);
