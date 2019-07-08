// Joseph Karl Magnussen: Building Interactive JavaScript Website (Chore Door project)

let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let numClosedDoors = 3;
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const isBot = (door) => {
   if(door.src === botDoorPath) {
     return true;
   } else if (isBot(door)) {
   return true; } else {
     return false;}
   }

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
  } else {
  return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('Winning!');
  } else if (isBot(door)) {
    gameOver('Loser!');
  }
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 1) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
}

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
}
door2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
      doorImage2.src = openDoor2;
      playDoor(door2);
    }
}
door3.onclick = () => {
      if(currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(door3);
   }
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
    }
  }

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
    randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'Winning!') {
    startButton.innerHTML = 'Winning!';
  } else {
  startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}
startRound();
