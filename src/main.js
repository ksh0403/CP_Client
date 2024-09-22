// src/main.js

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    // 에셋 로드
  }
  
  function create() {
    // 게임 초기 설정
  }
  
  function update() {
    // 프레임마다 호출되는 업데이트 로직
  }
  