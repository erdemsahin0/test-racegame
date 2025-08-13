// src/scenes/StartScene.js
export default class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    create() {
        this.add.text(400, 200, 'Nitro Lane Rush', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(400, 300, 'Press SPACE to Start', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5);

        // Listen for SPACE once, then start GameScene
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
    }
}
